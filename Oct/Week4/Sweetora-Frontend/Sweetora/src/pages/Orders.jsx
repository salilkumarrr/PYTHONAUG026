import { PackageCheck, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function Orders() {
  const order = JSON.parse(localStorage.getItem("sweetora_last_order") || "null");

  if (!order) {
    return (
      <section className="empty-cart container">
        <div className="empty-cart-icon"><ShoppingBag size={35} /></div>
        <span className="eyebrow">YOUR ORDERS</span>
        <h1>No orders yet.</h1>
        <p>Your next celebration could start with a box from Sweetora.</p>
        <Link to="/shop" className="button button-dark">Shop Sweets</Link>
      </section>
    );
  }

  return (
    <section className="page-section container">
      <div className="page-intro compact">
        <span className="eyebrow">YOUR ORDERS</span>
        <h1>Order history</h1>
      </div>

      <article className="order-card">
        <div className="order-header">
          <div>
            <span>Order ID</span>
            <strong>{order.id}</strong>
          </div>
          <div>
            <span>Date</span>
            <strong>{order.date}</strong>
          </div>
          <div>
            <span>Total</span>
            <strong>₹{order.total.toLocaleString("en-IN")}</strong>
          </div>
          <span className="status"><PackageCheck size={15} /> {order.status}</span>
        </div>

        <div className="order-items">
          {order.items.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="" />
              <span>{item.name} × {item.quantity}</span>
              <strong>₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>
            </div>
          ))}
        </div>

        <div className="order-address">
          <strong>Delivery address</strong>
          <span>
            {order.address.name}, {order.address.address}, {order.address.city},{" "}
            {order.address.state} - {order.address.pin}
          </span>
        </div>
      </article>
    </section>
  );
}
