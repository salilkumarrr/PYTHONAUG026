import React,{useEffect,useState} from "react";
import {Routes,Route,useNavigate} from "react-router-dom";
import {supabase} from "./lib/supabase";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import OrderSuccess from "./pages/OrderSuccess";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import {AuthContext} from "./lib/auth";
export default function App(){
 const [session,setSession]=useState(null),[profile,setProfile]=useState(null),[loading,setLoading]=useState(true),[toast,setToast]=useState(null);
 useEffect(()=>{if(!supabase){setLoading(false);return}
   supabase.auth.getSession().then(({data})=>setSession(data.session)).finally(()=>setLoading(false));
   const {data:{subscription}}=supabase.auth.onAuthStateChange((_e,s)=>setSession(s));
   return()=>subscription.unsubscribe()
 },[]);
 useEffect(()=>{if(!session){setProfile(null);return}
   supabase.from("profiles").select("*").eq("id",session.user.id).maybeSingle().then(({data})=>setProfile(data||null))
 },[session]);
 if(loading)return <div className="screen-loader"><div className="loader"></div><p>Loading Sweetora…</p></div>;
 return <AuthContext.Provider value={{session,profile,toast,setToast}}>
   <Navbar/>
   <main className="page"><Routes>
    <Route path="/" element={<Home/>}/><Route path="/shop" element={<Shop/>}/><Route path="/product/:id" element={<Product/>}/>
    <Route path="/login" element={<Auth mode="login"/>}/><Route path="/register" element={<Auth mode="register"/>}/>
    <Route path="/cart" element={<Guard><Cart/></Guard>}/><Route path="/checkout" element={<Guard><Checkout/></Guard>}/>
    <Route path="/orders" element={<Guard><Orders/></Guard>}/><Route path="/order-success/:id" element={<Guard><OrderSuccess/></Guard>}/>
    <Route path="/profile" element={<Guard><Profile/></Guard>}/><Route path="/admin" element={<Guard admin><Admin/></Guard>}/>
    <Route path="*" element={<NotFound/>}/>
   </Routes></main><Footer/><Toast/>
 </AuthContext.Provider>
}
function Guard({children,admin=false}){const {session,profile}=React.useContext(AuthContext),nav=useNavigate();
 useEffect(()=>{if(!session)nav("/login",{replace:true})},[session]);
 if(!session)return null;
 if(admin && profile?.role!=="admin")return <div className="container narrow"><div className="card center"><h2>Access denied</h2><p>Administrator privileges are required.</p></div></div>;
 return children
}
function NotFound(){return <div className="container narrow"><div className="card center"><h1>404</h1><p>That page doesn't exist.</p><a className="btn" href="/">Back home</a></div></div>}