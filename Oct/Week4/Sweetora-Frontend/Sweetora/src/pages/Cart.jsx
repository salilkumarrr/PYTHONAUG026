import { ArrowRight, Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart({ cart, onUpdateQuantity, onRemove }) {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal >= 999 || subtotal === 0 ? 0 : 79;
  const total = subtotal + shipping;

  if (!cart.length) {
    return (
      <section className="empty-cart container">
        <div className="empty-cart-icon">🪔</div>
        <span className="eyebrow">YOUR CART</span>
        <h1>Your cart is waiting for something sweet.</h1>
        <p>Explore our collection and add a little celebration to your day.</p>
        <Link to="/shop" className="button button-dark">Start Shopping</Link>
      </section>
    );
  }

  return (
    <section className="page-section container">
      <div className="page-intro compact">
        <span className="eyebrow">YOUR CART</span>
        <h1>Shopping bag</h1>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-copy">
                <span>{item.category}</span>
                <h3>{item.name}</h3>
                <strong>₹{item.price.toLocaleString("en-IN")}</strong>
              </div>

              <div className="quantity-control">
                <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                  <Minus size={15} />
                </button>
                <strong>{item.quantity}</strong>
                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                  <Plus size={15} />
                </button>
              </div>

              <strong className="item-total">
                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
              </strong>

              <button className="remove-button" onClick={() => onRemove(item.id)}>
                <Trash2 size={18} />
              </button>
            </article>
          ))}
        </div>

        <aside className="summary-card">
          <h2>Order summary</h2>
          <div><span>Subtotal</span><strong>₹{subtotal.toLocaleString("en-IN")}</strong></div>
          <div><span>Shipping</span><strong>{shipping ? `₹${shipping}` : "FREE"}</strong></div>
          <div className="summary-total"><span>Total</span><strong>₹{total.toLocaleString("en-IN")}</strong></div>
          <Link to="/checkout" className="button button-dark wide">
            Proceed to Checkout <ArrowRight size={17} />
          </Link>
          <p className="secure-note">Secure checkout • Free shipping above ₹999</p>
        </aside>
      </div>
    </section>
  );
}
