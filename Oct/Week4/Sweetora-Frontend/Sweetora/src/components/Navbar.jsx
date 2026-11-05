import { Link, NavLink } from "react-router-dom";
import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  UserRound,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About", to: "/about" },
];

export default function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="announcement">
        <span>FREE SHIPPING ON ORDERS ABOVE ₹999</span>
        <span className="announcement-hide">Handcrafted with love in India</span>
      </div>

      <nav className="navbar container">
        <button
          className="icon-button mobile-menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">S</span>
          <span>
            <strong>Sweetora</strong>
            <small>Premium Indian Sweets</small>
          </span>
        </Link>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/categories">Categories</NavLink>
        </div>

        <div className="nav-actions">
          <Link to="/shop" className="icon-button" aria-label="Search">
            <Search size={20} />
          </Link>
          <Link to="/wishlist" className="icon-button desktop-only" aria-label="Wishlist">
            <Heart size={20} />
          </Link>
          <Link to="/profile" className="icon-button desktop-only" aria-label="Account">
            <UserRound size={20} />
          </Link>
          <Link to="/cart" className="cart-button" aria-label="Cart">
            <ShoppingBag size={20} />
            <span>{cartCount}</span>
          </Link>
        </div>

        {menuOpen && (
          <div className="mobile-nav">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={closeMenu}>
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/categories" onClick={closeMenu}>
              Categories
            </NavLink>
            <NavLink to="/wishlist" onClick={closeMenu}>
              Wishlist
            </NavLink>
            <NavLink to="/profile" onClick={closeMenu}>
              Profile
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}
