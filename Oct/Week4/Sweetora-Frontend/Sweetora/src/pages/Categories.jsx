import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categories, products } from "../data/products";

export default function Categories() {
  return (
    <section className="page-section container">
      <div className="page-intro">
        <span className="eyebrow">EXPLORE</span>
        <h1>Sweet categories</h1>
        <p>Pick a mood, a memory or a celebration. There is a sweet for every moment.</p>
      </div>

      <div className="category-grid">
        {categories.filter((category) => category !== "All").map((category, index) => {
          const product = products[index % products.length];

          return (
            <Link to="/shop" className="category-card" key={category}>
              <img src={product.image} alt={category} />
              <div className="category-overlay">
                <span>{category}</span>
                <ArrowRight size={19} />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
