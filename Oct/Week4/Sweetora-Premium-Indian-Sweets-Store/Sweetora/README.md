# Sweetora — Premium Indian Sweets Store

A production-oriented React + Vite + Supabase starter for a premium Indian sweets store.

## Stack
- React + Vite
- React Router
- Modern CSS
- Supabase Auth + PostgreSQL + RLS
- Lucide React

## 1. Local setup
1. Install Node.js 20+.
2. Create a Supabase project.
3. In Supabase SQL Editor, run `supabase/schema.sql`.
4. In Supabase Authentication > Providers > Email, enable Email provider. For production, keep email confirmation enabled.
5. Copy `.env.example` to `.env`.
6. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` (or Supabase publishable key).
7. Run:
   npm install
   npm run dev

## 2. Admin
Register normally. Find the user UUID in Supabase Authentication > Users, then run the commented admin bootstrap statement at the bottom of `supabase/schema.sql` with that UUID. Admin permissions are enforced by PostgreSQL RLS, not by localStorage or frontend-only flags.

## 3. Security model
- Passwords are handled by Supabase Auth; this app never stores plaintext passwords.
- Frontend uses only the public anon/publishable key.
- RLS is enabled for every application table.
- User-owned cart, profile, wishlist, order and order-item access is scoped to `auth.uid()`.
- Admin product/order operations require the database role `admin`.
- Checkout calls the trusted `create_order` Postgres function. The browser sends delivery fields only; product prices and totals are recomputed from current database products.
- The order detail query is scoped to both order ID and current authenticated user.
- No authentication state is stored in localStorage by application code. Supabase's SDK persists its auth session as part of its normal client auth mechanism.
- Never expose a Supabase service-role key in `.env` or frontend code.

## 4. Email verification
With email confirmation enabled, Supabase will not provide a usable authenticated session until the email is verified. The registration flow also explicitly signs out any session returned by a configured Supabase environment, so registration does not leave the user logged in.

Set the Supabase Site URL and redirect URL to your deployed app URL. Example redirect:
`https://your-domain.example/login`

## 5. Deployment
Build with:
`npm run build`

Deploy the `dist` directory to Vercel, Netlify, Cloudflare Pages, or another static host. Add the same `VITE_*` environment variables in the host's environment settings. Configure SPA fallback to `index.html` so React Router direct URLs work.

## 6. Before production
- Replace sample image URLs with owned/licensed product photography.
- Configure Supabase email templates and SMTP.
- Add payment integration on a trusted backend/Edge Function if online payment is required.
- Add rate limiting/bot protection where appropriate.
- Add an image storage bucket with restrictive upload policies if admins should upload images.
- Review tax/shipping/return policy requirements for your business and jurisdiction.
- Do not use service-role credentials in the browser.

## Important
This repository contains real Supabase Auth, database policies, and a server-side PostgreSQL order function, but it cannot validate your live Supabase project configuration from this ZIP alone. Run the setup steps above and test your deployed project with separate customer and admin accounts.