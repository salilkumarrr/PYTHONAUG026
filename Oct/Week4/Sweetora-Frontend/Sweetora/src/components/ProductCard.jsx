import { Heart, ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} className="product-image" />
        </Link>

        {product.badge && <span className="product-badge">{product.badge}</span>}

        <button className="wishlist-button" aria-label={`Add ${product.name} to wishlist`}>
          <Heart size={18} />
        </button>

        <button className="quick-add" onClick={() => onAddToCart(product)}>
          <ShoppingBag size={17} />
          Quick Add
        </button>
      </div>

      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <Link to={`/product/${product.id}`} className="product-name">
          {product.name}
        </Link>

        <div className="rating-row">
          <span className="stars">
            <Star size={14} fill="currentColor" />
            {product.rating}
          </span>
          <span className="review-count">({product.reviews})</span>
        </div>

        <div className="price-row">
          <strong>₹{product.price.toLocaleString("en-IN")}</strong>
          <span>₹{product.oldPrice.toLocaleString("en-IN")}</span>
        </div>
      </div>
    </article>
  );
}
