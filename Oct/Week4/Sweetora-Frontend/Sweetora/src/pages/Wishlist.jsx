import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function Wishlist() {
  return (
    <section className="empty-cart container">
      <div className="empty-cart-icon"><Heart size={34} /></div>
      <span className="eyebrow">WISHLIST</span>
      <h1>Your favourite sweets belong here.</h1>
      <p>Wishlist interactions are ready for your next frontend enhancement.</p>
      <Link to="/shop" className="button button-dark">
        <ShoppingBag size={17} /> Explore Sweets
      </Link>
    </section>
  );
}
