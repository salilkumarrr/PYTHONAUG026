import { ArrowLeft, Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";

export default function Product({ onAddToCart }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <section className="simple-page container">
        <h1>Sweet not found</h1>
        <Link to="/shop" className="button button-dark">Back to Shop</Link>
      </section>
    );
  }

  const addProduct = () => {
    for (let index = 0; index < quantity; index += 1) {
      onAddToCart(product);
    }
  };

  return (
    <section className="product-detail container">
      <Link to="/shop" className="back-link">
        <ArrowLeft size={17} /> Back to collection
      </Link>

      <div className="product-detail-grid">
        <div className="product-main-image">
          <img src={product.image} alt={product.name} />
          <span className="product-badge">{product.badge}</span>
        </div>

        <div className="product-copy">
          <p className="product-category">{product.category}</p>
          <h1>{product.name}</h1>

          <div className="detail-rating">
            <span className="stars">
              <Star size={15} fill="currentColor" />
              {product.rating}
            </span>
            <span>{product.reviews} reviews</span>
          </div>

          <div className="detail-price">
            <strong>₹{product.price.toLocaleString("en-IN")}</strong>
            <span>₹{product.oldPrice.toLocaleString("en-IN")}</span>
          </div>

          <p className="detail-description">{product.description}</p>

          <div className="quantity-row">
            <span>Quantity</span>
            <div className="quantity-control">
              <button onClick={() => setQuantity((value) => Math.max(1, value - 1))}>
                <Minus size={16} />
              </button>
              <strong>{quantity}</strong>
              <button onClick={() => setQuantity((value) => value + 1)}>
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div className="detail-actions">
            <button className="button button-dark wide" onClick={addProduct}>
              <ShoppingBag size={18} />
              Add to Cart
            </button>
            <button className="outline-icon-button" aria-label="Add to wishlist">
              <Heart size={20} />
            </button>
          </div>

          <div className="product-notes">
            <div><strong>Freshly packed</strong><span>Prepared with care for your order.</span></div>
            <div><strong>Premium ingredients</strong><span>Made with carefully selected ingredients.</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
