import { useEffect, useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Wishlist from "./pages/Wishlist";

function ProtectedRoute({ children }) {
  const isLoggedIn = Boolean(sessionStorage.getItem("sweetora_session"));

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default function App() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("sweetora_cart")) || [];
    } catch {
      return [];
    }
  });

  const [toast, setToast] = useState("");

  useEffect(() => {
    localStorage.setItem("sweetora_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (!toast) return;

    const timer = window.setTimeout(() => setToast(""), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });

    setToast(`${product.name} added to your cart`);
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      setCart((current) => current.filter((item) => item.id !== id));
      return;
    }

    setCart((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((current) => current.filter((item) => item.id !== id));
    setToast("Item removed from cart");
  };

  const clearCart = () => setCart([]);

  const logout = () => {
    sessionStorage.removeItem("sweetora_session");
    localStorage.removeItem("sweetora_user");
    window.location.href = "/login";
  };

  return (
    <div className="app-shell">
      <Navbar cartCount={cartCount} />

      <main>
        <Routes>
          <Route path="/login" element={<Auth mode="login" />} />
          <Route path="/register" element={<Auth mode="register" />} />

          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <ProtectedAppRoutes
                  cart={cart}
                  addToCart={addToCart}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                  logout={logout}
                />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
      <Toast message={toast} onClose={() => setToast("")} />
    </div>
  );
}

function ProtectedAppRoutes({
  cart,
  addToCart,
  updateQuantity,
  removeFromCart,
  clearCart,
  logout,
}) {
  return (
    <Routes>
      <Route path="/" element={<Home onAddToCart={addToCart} />} />
      <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
      <Route path="/product/:id" element={<Product onAddToCart={addToCart} />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/about" element={<About />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route
        path="/cart"
        element={
          <Cart
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
          />
        }
      />
      <Route
        path="/checkout"
        element={<Checkout cart={cart} onClearCart={clearCart} />}
      />
      <Route path="/orders" element={<Orders />} />
      <Route path="/profile" element={<Profile onLogout={logout} />} />
      <Route path="/privacy" element={<SimplePage title="Privacy Policy" />} />
      <Route path="/terms" element={<SimplePage title="Terms & Conditions" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function SimplePage({ title }) {
  return (
    <section className="simple-page container">
      <span className="eyebrow">Sweetora</span>
      <h1>{title}</h1>
      <p>
        This frontend page is ready for your final business policy content.
        Replace this copy with the policy text used by your store.
      </p>
    </section>
  );
}
