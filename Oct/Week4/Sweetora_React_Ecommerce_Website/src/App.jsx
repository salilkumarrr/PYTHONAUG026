import React, { useEffect, useMemo, useState } from 'react';
import { Routes, Route, Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, UserRound, Heart, Star, Plus, Minus, Trash2, ArrowRight, PackageCheck, MapPin, ShieldCheck, Truck, LogOut, ChevronRight, Sparkles, Gift, CheckCircle2, Mail, Phone } from 'lucide-react';
import './App.css';

const PRODUCTS = [
 {id:1,name:'Motichoor Laddu',category:'Traditional',price:349,oldPrice:399,rating:4.9,tag:'Bestseller',weight:'500 g',image:'https://images.unsplash.com/photo-1605197161470-5d2b3a6a9c7b?auto=format&fit=crop&w=900&q=85'},
 {id:2,name:'Gulab Jamun',category:'Traditional',price:299,oldPrice:349,rating:4.8,tag:'Popular',weight:'500 g',image:'https://images.unsplash.com/photo-1666190092159-3c9c8a1b4d9a?auto=format&fit=crop&w=900&q=85'},
 {id:3,name:'Kaju Katli',category:'Premium',price:599,oldPrice:649,rating:4.9,tag:'Premium',weight:'500 g',image:'https://images.unsplash.com/photo-1601303516534-5b6c7a4b3e5d?auto=format&fit=crop&w=900&q=85'},
 {id:4,name:'Rasgulla',category:'Traditional',price:279,oldPrice:319,rating:4.7,tag:'Fresh batch',weight:'500 g',image:'https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&w=900&q=85'},
 {id:5,name:'Assorted Gift Box',category:'Gifting',price:899,oldPrice:999,rating:5.0,tag:'Gift favourite',weight:'1 kg',image:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85'},
 {id:6,name:'Pista Roll',category:'Premium',price:549,oldPrice:599,rating:4.8,tag:'Chef’s pick',weight:'500 g',image:'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=900&q=85'},
 {id:7,name:'Kesar Peda',category:'Traditional',price:329,oldPrice:369,rating:4.8,tag:'Classic',weight:'500 g',image:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85'},
 {id:8,name:'Dry Fruit Bites',category:'Gifting',price:699,oldPrice:749,rating:4.9,tag:'No added colour',weight:'500 g',image:'https://images.unsplash.com/photo-1599599810694-b5b37304c9c3?auto=format&fit=crop&w=900&q=85'}
];
const money = n => '₹' + Number(n).toLocaleString('en-IN');
const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };

export default function App() {
 const [cart,setCart]=useState(()=>read('sweetora_cart',[]));
 const [user,setUser]=useState(()=>read('sweetora_user',null));
 const [orders,setOrders]=useState(()=>read('sweetora_orders',[]));
 const [wishlist,setWishlist]=useState(()=>read('sweetora_wishlist',[]));
 const [menuOpen,setMenuOpen]=useState(false);
 const [toast,setToast]=useState('');
 const navigate=useNavigate();
 useEffect(()=>localStorage.setItem('sweetora_cart',JSON.stringify(cart)),[cart]);
 useEffect(()=>localStorage.setItem('sweetora_user',JSON.stringify(user)),[user]);
 useEffect(()=>localStorage.setItem('sweetora_orders',JSON.stringify(orders)),[orders]);
 useEffect(()=>localStorage.setItem('sweetora_wishlist',JSON.stringify(wishlist)),[wishlist]);
 const notify=m=>{setToast(m);window.setTimeout(()=>setToast(''),2600)};
 const addToCart=p=>{setCart(old=>{const f=old.find(x=>x.id===p.id);return f?old.map(x=>x.id===p.id?{...x,qty:x.qty+1}:x):[...old,{...p,qty:1}]});notify(p.name+' added to your bag')};
 const updateQty=(id,d)=>setCart(old=>old.map(x=>x.id===id?{...x,qty:x.qty+d}:x).filter(x=>x.qty>0));
 const toggleWish=id=>setWishlist(old=>old.includes(id)?old.filter(x=>x!==id):[...old,id]);
 const logout=()=>{setUser(null);notify('Signed out successfully');navigate('/')};
 const placeOrder=details=>{const sub=cart.reduce((s,x)=>s+x.price*x.qty,0);const order={id:'SW'+Date.now().toString().slice(-8),date:new Date().toLocaleString('en-IN'),items:cart,total:sub+(sub>=799?0:49),status:'Order confirmed',customer:details};setOrders(old=>[order,...old]);setCart([]);navigate('/order-success/'+order.id)};
 const shared={cart,user,orders,wishlist,addToCart,updateQty,toggleWish,notify,setUser,logout,placeOrder};
 return <>
  <header className="header"><div className="topline">A little sweetness goes a long way <b>✦</b> Free delivery on orders above ₹799</div>
   <div className="nav container"><button className="hamb icon" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
    <Link to="/" className="brand"><i>S</i><span>sweetora<small>MADE WITH LOVE</small></span></Link>
    <nav className={menuOpen?'navlinks show':'navlinks'}><NavLink to="/" end>Home</NavLink><a href="/#shop" onClick={()=>setMenuOpen(false)}>Shop sweets</a><a href="/#story" onClick={()=>setMenuOpen(false)}>Our story</a><NavLink to="/orders">My orders</NavLink></nav>
    <div className="navright"><Link className="icon" to="/account"><UserRound/></Link><Link className="bag" to="/cart"><ShoppingBag/> Bag <b>{cart.reduce((s,x)=>s+x.qty,0)}</b></Link></div>
   </div></header>
  <main><Routes>
   <Route path="/" element={<Home addToCart={addToCart} wishlist={wishlist} toggleWish={toggleWish}/>}/>
   <Route path="/cart" element={<Cart cart={cart} updateQty={updateQty}/>}/>
   <Route path="/account" element={<Account user={user} setUser={setUser} notify={notify}/>}/>
   <Route path="/orders" element={<Orders orders={orders}/>}/>
   <Route path="/checkout" element={<Checkout cart={cart} user={user} placeOrder={placeOrder} notify={notify}/>}/>
   <Route path="/order-success/:id" element={<Success orders={orders}/>}/>
   <Route path="*" element={<div className="empty"><h2>Page not found</h2><Link className="btn" to="/">Back home</Link></div>}/>
  </Routes></main>
  <Footer/>{toast&&<div className="toast"><CheckCircle2 size={18}/>{toast}</div>}
 </>;
}

function Home({addToCart,wishlist,toggleWish}) {
 const [category,setCategory]=useState('All'),[search,setSearch]=useState('');
 const products=useMemo(()=>PRODUCTS.filter(p=>(category==='All'||p.category===category)&&p.name.toLowerCase().includes(search.toLowerCase())),[category,search]);
 return <>
  <section className="hero"><div className="hero-copy"><div className="eyebrow"><Sparkles size={15}/> HANDCRAFTED HAPPINESS</div><h1>Make every<br/><em>moment sweeter.</em></h1><p>Thoughtfully made Indian sweets, prepared in small batches with ingredients that feel like home.</p><div className="hero-actions"><a className="btn" href="#shop">Explore sweets <ArrowRight size={17}/></a><a className="plain-link" href="#story">Our little story ↗</a></div><div className="proof"><b>★★★★★</b> 4.9/5 loved by 2,000+ sweet tooths</div></div><div className="hero-photo"><div className="hero-sticker">A BOX<br/>FULL OF<br/><strong>JOY</strong></div><div className="photo-note">✦ <span><b>Freshly made</b><small>Just for your celebrations</small></span></div></div></section>
  <section className="perks container"><div><Truck/><span><b>Fresh delivery</b><small>Carefully packed to arrive fresh</small></span></div><div><ShieldCheck/><span><b>Quality ingredients</b><small>Only the good stuff goes in</small></span></div><div><Gift/><span><b>Made for gifting</b><small>Little boxes, big happiness</small></span></div></section>
  <section className="shop container" id="shop"><div className="section-head"><div><div className="eyebrow">THE SWEET COLLECTION</div><h2>Find your <em>favourite.</em></h2><p>Traditional recipes, a little extra love.</p></div><label className="search"><Search/><input placeholder="Search sweets..." value={search} onChange={e=>setSearch(e.target.value)}/></label></div>
   <div className="filters">{['All','Traditional','Premium','Gifting'].map(c=><button className={category===c?'active':''} onClick={()=>setCategory(c)} key={c}>{c}</button>)}</div>
   <div className="products">{products.map(p=><article className="product" key={p.id}><div className="product-img"><img src={p.image} alt={p.name} onError={e=>e.currentTarget.src='https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85'}/><label>{p.tag}</label><button className={wishlist.includes(p.id)?'heart liked':'heart'} onClick={()=>toggleWish(p.id)}><Heart size={18} fill={wishlist.includes(p.id)?'currentColor':'none'}/></button><button className="quick" onClick={()=>addToCart(p)}><Plus size={16}/> Add to bag</button></div><div className="meta"><span>{p.category}</span><span>★ {p.rating}</span></div><h3>{p.name}</h3><p>{p.weight} · Freshly prepared</p><div className="price"><b>{money(p.price)}</b><del>{money(p.oldPrice)}</del><button onClick={()=>addToCart(p)}><Plus/></button></div></article>)}</div>
   {!products.length&&<p className="no-results">No sweets found. Try another search.</p>}
  </section>
  <section className="story" id="story"><div className="story-img"></div><div><div className="eyebrow">A SWEET LITTLE PROMISE</div><h2>Old-school recipes.<br/><em>Heartfelt goodness.</em></h2><p>At Sweetora, we believe the best memories are shared over something sweet. Every batch is made with care, inspired by the flavours we grew up loving and packed to make someone smile.</p><Link className="btn dark" to="/account">Be part of our family <ArrowRight size={17}/></Link></div></section>
  <section className="quote"><span>“</span><p>Some moments deserve a little more sweetness.</p><small>THE SWEETORA PROMISE</small></section>
 </>;
}
function Cart({cart,updateQty}) {
 const sub=cart.reduce((s,x)=>s+x.price*x.qty,0),ship=sub===0||sub>=799?0:49;
 return <div className="container page"><PageTitle eyebrow="YOUR LITTLE BUNDLE OF JOY" title={<>Shopping <em>bag.</em></>} text="Review your treats before they head your way."/>
 {cart.length===0?<Empty icon={<ShoppingBag/>} title="Your bag is waiting for something sweet." text="Explore our handcrafted collection and add your favourites."/>:<div className="two-col"><div className="cart-list">{cart.map(x=><div className="cart-row" key={x.id}><img src={x.image}/><div className="cart-info"><small>{x.category}</small><h3>{x.name}</h3><p>{x.weight}</p><b>{money(x.price)}</b></div><div className="qty"><button onClick={()=>updateQty(x.id,-1)}><Minus/></button>{x.qty}<button onClick={()=>updateQty(x.id,1)}><Plus/></button></div><button className="remove" onClick={()=>updateQty(x.id,-x.qty)}><Trash2/></button></div>)}</div><Summary sub={sub} ship={ship}><Link className="btn full" to="/checkout">Continue to checkout <ArrowRight/></Link></Summary></div>}</div>;
}
function Summary({sub,ship,children}) {return <aside className="summary"><h3>Order summary</h3><div><span>Subtotal</span><b>{money(sub)}</b></div><div><span>Delivery</span><b>{ship===0?'FREE':money(ship)}</b></div>{sub>0&&sub<799&&<p className="hint">Add {money(799-sub)} more for free delivery.</p>}<div className="total"><span>Total</span><b>{money(sub+ship)}</b></div>{children}<small className="secure"><ShieldCheck/> Safe and secure checkout</small></aside>}
function PageTitle({eyebrow,title,text}) {return <div className="page-title"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{text}</p></div>}
function Empty({icon,title,text}) {return <div className="empty">{icon}<h2>{title}</h2><p>{text}</p><Link className="btn" to="/#shop">Explore sweets <ArrowRight/></Link></div>}
function Account({user,setUser,notify}) {
 const [mode,setMode]=useState('login'),[form,setForm]=useState({name:'',email:'',password:''});
 const submit=e=>{e.preventDefault();const accounts=read('sweetora_accounts',[]);if(mode==='register'){if(accounts.some(a=>a.email===form.email))return notify('This email is already registered');localStorage.setItem('sweetora_accounts',JSON.stringify([...accounts,form]));setUser({name:form.name,email:form.email});notify('Your account is ready!')}else{const a=accounts.find(a=>a.email===form.email&&a.password===form.password);if(!a)return notify('Incorrect login. Register first if you are new.');setUser({name:a.name,email:a.email});notify('Welcome back!')}};
 if(user)return <div className="container page"><div className="account-box"><UserRound/><div className="eyebrow">YOUR SWEETORA ACCOUNT</div><h1>Hello, <em>{user.name.split(' ')[0]}!</em></h1><p>Signed in as {user.email}</p><Link to="/orders" className="account-link">View order history <ChevronRight/></Link><button className="btn outline" onClick={()=>{setUser(null);notify('Signed out')}}><LogOut/> Sign out</button></div></div>;
 return <div className="container page auth-layout"><div className="auth-intro"><div className="eyebrow">WELCOME TO SWEETORA</div><h1>A sweeter experience <em>starts here.</em></h1><p>Create an account to keep track of your orders and save your favourite treats.</p><p>♡ Save your favourites</p><p>♧ Track your sweet deliveries</p></div><form className="auth-form" onSubmit={submit}><div className="tabs"><button type="button" className={mode==='login'?'chosen':''} onClick={()=>setMode('login')}>Sign in</button><button type="button" className={mode==='register'?'chosen':''} onClick={()=>setMode('register')}>Create account</button></div><h2>{mode==='login'?'Welcome back!':'Join the sweet side.'}</h2><p>{mode==='login'?'Sign in to continue your sweet journey.':'A few details and you’re all set.'}</p>{mode==='register'&&<label>Full name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label>}<label>Email address<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label><label>Password<input required minLength="6" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} placeholder="At least 6 characters"/></label><button className="btn full">{mode==='login'?'Sign in':'Create my account'} <ArrowRight/></button><small className="fineprint">Demo frontend only — account details are stored in this browser.</small></form></div>;
}
function Checkout({cart,user,placeOrder,notify}) {
 const [d,setD]=useState({name:user?.name||'',email:user?.email||'',phone:'',address:'',city:'',pincode:'',payment:'Cash on delivery'});
 const sub=cart.reduce((s,x)=>s+x.price*x.qty,0),ship=sub>=799?0:49;
 const change=e=>setD({...d,[e.target.name]:e.target.value});
 if(!cart.length)return <div className="container page"><Empty icon={<ShoppingBag/>} title="Your bag is empty" text="Add something delicious before checking out."/></div>;
 return <div className="container page"><PageTitle eyebrow="ALMOST YOURS" title={<>Secure <em>checkout.</em></>} text="Just a few details and your sweets are on their way."/><div className="two-col checkout-grid"><form className="checkout-form" onSubmit={e=>{e.preventDefault();placeOrder(d)}}><h3><MapPin/> Delivery details</h3><div className="form-grid"><label>Full name<input required name="name" value={d.name} onChange={change}/></label><label>Email<input required type="email" name="email" value={d.email} onChange={change}/></label><label>Phone number<input required pattern="[0-9]{10}" name="phone" value={d.phone} onChange={change} placeholder="10-digit mobile number"/></label><label>PIN code<input required pattern="[0-9]{6}" name="pincode" value={d.pincode} onChange={change} placeholder="6-digit PIN code"/></label><label className="wide">Full address<textarea required name="address" value={d.address} onChange={change} rows="3"/></label><label className="wide">City / Town<input required name="city" value={d.city} onChange={change}/></label></div><h3><ShieldCheck/> Payment method</h3><label className="radio"><input type="radio" name="payment" value="Cash on delivery" checked={d.payment==='Cash on delivery'} onChange={change}/> Cash on delivery</label><label className="radio"><input type="radio" name="payment" value="UPI (demo)" checked={d.payment==='UPI (demo)'} onChange={change}/> UPI (demo — no real payment processed)</label><button className="btn full">Place order · {money(sub+ship)} <ArrowRight/></button></form><Summary sub={sub} ship={ship}><p className="summary-note">Your order is securely recorded in this browser demo.</p></Summary></div></div>;
}
function Success({orders}) {
 const {id}=useParams(),order=orders.find(x=>x.id===id);
 return <div className="container page success-wrap"><div className="success"><div className="success-icon"><CheckCircle2/></div><div className="eyebrow">SWEET SUCCESS!</div><h1>Your order is <em>confirmed.</em></h1><p>Thank you for choosing Sweetora. We’re preparing your little bundle of happiness.</p>{order&&<div className="success-data"><div><small>Order number</small><b>{order.id}</b></div><div><small>Order total</small><b>{money(order.total)}</b></div><div><small>Payment</small><b>{order.customer.payment}</b></div></div>}<div className="next"><PackageCheck/><span><b>What happens next?</b><small>We’ll prepare your order with care. Keep your order number handy for reference.</small></span></div><div className="success-actions"><Link className="btn" to="/orders">View my orders <ArrowRight/></Link><Link className="btn outline" to="/">Continue shopping</Link></div></div></div>;
}
function Orders({orders}) {
 return <div className="container page"><PageTitle eyebrow="YOUR SWEET JOURNEY" title={<>Order <em>history.</em></>} text="All your happy moments, in one place."/>
 {orders.length===0?<Empty icon={<PackageCheck/>} title="No orders just yet." text="Your future favourite treats will show up here."/>:<div className="orders">{orders.map(o=><article className="order-card" key={o.id}><div className="order-head"><span><small>ORDER ID</small><b>{o.id}</b><small>{o.date}</small></span><label><CheckCircle2/> {o.status}</label></div><div className="order-items">{o.items.map(i=><div key={i.id}><img src={i.image}/><span>{i.name}<small>Qty: {i.qty}</small></span></div>)}</div><div className="order-foot"><span>{o.items.reduce((s,i)=>s+i.qty,0)} item(s) · {o.customer.payment}</span><b>{money(o.total)}</b></div></article>)}</div>}</div>;
}
function Footer(){return <footer className="footer"><div className="container footer-main"><div><Link to="/" className="brand"><i>S</i><span>sweetora<small>MADE WITH LOVE</small></span></Link><p>Handcrafted Indian sweets for the moments that matter.</p></div><div><b>Explore</b><Link to="/">Home</Link><a href="/#shop">Shop sweets</a><Link to="/orders">My orders</Link></div><div><b>Need a hand?</b><a href="mailto:hello@sweetora.example"><Mail/> hello@sweetora.example</a><span><Phone/> +91 98765 43210</span></div></div><div className="container footer-bottom">© {new Date().getFullYear()} Sweetora. Made with love.<span>Freshness · Quality · Happiness</span></div></footer>}
