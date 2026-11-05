-- Sweetora production-oriented Supabase schema
create extension if not exists pgcrypto;
create type public.user_role as enum ('customer','admin');
create type public.order_status as enum ('pending','confirmed','packed','shipped','delivered','cancelled');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  phone text not null default '',
  role public.user_role not null default 'customer',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text not null default '',
  short_description text not null default '',
  price numeric(10,2) not null check (price >= 0),
  category text not null,
  image_url text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.cart_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete cascade,
  quantity integer not null check (quantity > 0 and quantity <= 50),
  created_at timestamptz not null default now(),
  unique(user_id, product_id)
);

create table public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete restrict,
  full_name text not null,
  phone text not null,
  address text not null,
  city text not null,
  state text not null,
  pin_code text not null,
  total_amount numeric(10,2) not null check(total_amount >= 0),
  status public.order_status not null default 'pending',
  created_at timestamptz not null default now()
);

create table public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid references public.products(id) on delete set null,
  product_name text not null,
  unit_price numeric(10,2) not null check(unit_price >= 0),
  quantity integer not null check(quantity > 0),
  line_total numeric(10,2) generated always as (unit_price * quantity) stored
);

create table public.wishlists (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique(user_id, product_id)
);

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path=public
as $$ select exists(select 1 from public.profiles where id=auth.uid() and role='admin') $$;

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path=public
as $$ begin insert into public.profiles(id,full_name,phone) values(new.id,coalesce(new.raw_user_meta_data->>'full_name',''),coalesce(new.raw_user_meta_data->>'phone','')); return new; end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.products enable row level security;
alter table public.cart_items enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.wishlists enable row level security;

create policy "profiles own select" on public.profiles for select using (auth.uid()=id or public.is_admin());
create policy "profiles own update" on public.profiles for update using (auth.uid()=id) with check (auth.uid()=id);
create policy "profiles admin select" on public.profiles for select using (public.is_admin());

create policy "products public read active" on public.products for select using (is_active=true or public.is_admin());
create policy "products admin insert" on public.products for insert with check (public.is_admin());
create policy "products admin update" on public.products for update using (public.is_admin()) with check (public.is_admin());
create policy "products admin delete" on public.products for delete using (public.is_admin());

create policy "cart own select" on public.cart_items for select using (auth.uid()=user_id);
create policy "cart own insert" on public.cart_items for insert with check (auth.uid()=user_id);
create policy "cart own update" on public.cart_items for update using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "cart own delete" on public.cart_items for delete using (auth.uid()=user_id);

create policy "orders own select" on public.orders for select using (auth.uid()=user_id or public.is_admin());
create policy "orders admin update" on public.orders for update using (public.is_admin()) with check (public.is_admin());
create policy "orders admin select" on public.orders for select using (public.is_admin());

create policy "order items owner select" on public.order_items for select using (exists(select 1 from public.orders o where o.id=order_id and (o.user_id=auth.uid() or public.is_admin())));
create policy "wishlist own all" on public.wishlists for all using (auth.uid()=user_id) with check (auth.uid()=user_id);

create or replace function public.create_order(
 p_full_name text,p_phone text,p_address text,p_city text,p_state text,p_pin_code text
) returns uuid language plpgsql security definer set search_path=public
as $$
declare v_order uuid; v_total numeric(10,2); v_user uuid:=auth.uid();
begin
 if v_user is null then raise exception 'Not authenticated'; end if;
 if length(trim(p_full_name))<2 or length(trim(p_address))<8 or length(trim(p_city))<2 or length(trim(p_state))<2 or p_pin_code !~ '^[0-9]{6}$' then raise exception 'Invalid delivery details'; end if;
 select coalesce(sum(ci.quantity*p.price),0) into v_total from cart_items ci join products p on p.id=ci.product_id where ci.user_id=v_user and p.is_active=true;
 if v_total<=0 then raise exception 'Cart is empty'; end if;
 insert into orders(user_id,full_name,phone,address,city,state,pin_code,total_amount) values(v_user,trim(p_full_name),p_phone,trim(p_address),trim(p_city),trim(p_state),p_pin_code,v_total) returning id into v_order;
 insert into order_items(order_id,product_id,product_name,unit_price,quantity)
 select v_order,p.id,p.name,p.price,ci.quantity from cart_items ci join products p on p.id=ci.product_id where ci.user_id=v_user and p.is_active=true;
 return v_order;
end $$;

revoke all on function public.create_order(text,text,text,text,text,text) from public;
grant execute on function public.create_order(text,text,text,text,text,text) to authenticated;

-- Admin bootstrap: after registering your first account, run:
-- update public.profiles set role='admin' where id='YOUR_AUTH_USER_UUID';

insert into public.products(name,description,short_description,price,category,image_url,is_active) values
('Royal Kaju Katli','Silky cashew fudge finished with delicate silver leaf.','Silky cashew fudge finished with delicate silver leaf.',699,'Traditional','https://images.unsplash.com/photo-1605196560548-1a9f2b1f9e6f?auto=format&fit=crop&w=900&q=80',true),
('Pistachio Motichoor','Tiny golden boondi pearls with a pistachio finish.','Tiny golden boondi pearls with a pistachio finish.',549,'Traditional','https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80',true),
('Dry Fruit Bites','Premium nuts, dates and saffron in every bite.','Premium nuts, dates and saffron in every bite.',799,'Dry Fruits','https://images.unsplash.com/photo-1599599810694-b5ac8b5a2e36?auto=format&fit=crop&w=900&q=80',true);