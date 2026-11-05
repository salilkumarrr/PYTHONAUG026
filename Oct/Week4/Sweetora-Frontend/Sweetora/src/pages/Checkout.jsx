import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Checkout({ cart, onClearCart }) {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pin: "",
  });

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal >= 999 ? 0 : 79;
  const total = subtotal + shipping;

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const placeOrder = (event) => {
    event.preventDefault();

    const order = {
      id: `SW${Date.now().toString().slice(-8)}`,
      date: new Date().toLocaleDateString("en-IN"),
      total,
      status: "Confirmed",
      items: cart,
      address: form,
    };

    localStorage.setItem("sweetora_last_order", JSON.stringify(order));
    setSubmitted(true);
    onClearCart();

    window.setTimeout(() => {
      navigate("/orders");
    }, 900);
  };

  if (submitted) {
    return (
      <section className="success-page container">
        <CheckCircle2 size={60} />
        <span className="eyebrow">ORDER PLACED</span>
        <h1>Your sweet order is confirmed.</h1>
        <p>We've saved your order details. Redirecting you to your orders...</p>
      </section>
    );
  }

  return (
    <section className="page-section container">
      <Link to="/cart" className="back-link">
        <ArrowLeft size={17} /> Back to cart
      </Link>

      <div className="page-intro compact">
        <span className="eyebrow">CHECKOUT</span>
        <h1>Complete your order</h1>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={placeOrder}>
          <div className="form-card">
            <h2>Delivery details</h2>

            <div className="form-grid">
              <label>
                Full Name
                <input
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  required
                />
              </label>

              <label>
                Phone
                <input
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  required
                />
              </label>

              <label className="full">
                Address
                <textarea
                  rows="3"
                  value={form.address}
                  onChange={(event) => updateField("address", event.target.value)}
                  required
                />
              </label>

              <label>
                City
                <input
                  value={form.city}
                  onChange={(event) => updateField("city", event.target.value)}
                  required
                />
              </label>

              <label>
                State
                <input
                  value={form.state}
                  onChange={(event) => updateField("state", event.target.value)}
                  required
                />
              </label>

              <label>
                PIN Code
                <input
                  value={form.pin}
                  onChange={(event) => updateField("pin", event.target.value)}
                  inputMode="numeric"
                  required
                />
              </label>
            </div>
          </div>

          <button className="button button-dark wide" type="submit">
            Place Order · ₹{total.toLocaleString("en-IN")}
          </button>
        </form>

        <aside className="summary-card">
          <h2>Order summary</h2>
          {cart.map((item) => (
            <div className="checkout-item" key={item.id}>
              <img src={item.image} alt="" />
              <div>
                <strong>{item.name}</strong>
                <span>Qty {item.quantity}</span>
              </div>
              <strong>₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>
            </div>
          ))}
          <div><span>Subtotal</span><strong>₹{subtotal.toLocaleString("en-IN")}</strong></div>
          <div><span>Shipping</span><strong>{shipping ? `₹${shipping}` : "FREE"}</strong></div>
          <div className="summary-total"><span>Total</span><strong>₹{total.toLocaleString("en-IN")}</strong></div>
        </aside>
      </div>
    </section>
  );
}
