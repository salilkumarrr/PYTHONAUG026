import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand footer-logo">
            <span className="brand-mark">S</span>
            <span>
              <strong>Sweetora</strong>
              <small>Premium Indian Sweets</small>
            </span>
          </Link>
          <p>
            Traditional Indian flavours, thoughtfully crafted for modern
            celebrations.
          </p>
          <div className="socials">
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <Link to="/shop">Shop All</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">Our Story</Link>
          <Link to="/orders">Track Order</Link>
        </div>

        <div>
          <h4>Help</h4>
          <Link to="/profile">My Account</Link>
          <Link to="/cart">Shopping Cart</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <p><Phone size={16} /> +91 98765 43210</p>
          <p><Mail size={16} /> hello@sweetora.in</p>
          <p><MapPin size={16} /> Bhubaneswar, Odisha, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © {new Date().getFullYear()} Sweetora. Crafted for sweet moments.
        </div>
      </div>
    </footer>
  );
}
