import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { categories, products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop({ onAddToCart }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesQuery = product.name
        .toLowerCase()
        .includes(query.toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <section className="page-section container">
      <div className="page-intro">
        <span className="eyebrow">THE SWEETORA COLLECTION</span>
        <h1>Shop all sweets</h1>
        <p>Find your favourite Indian mithai, beautifully packed for every occasion.</p>
      </div>

      <div className="shop-toolbar">
        <div className="search-box">
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search sweets..."
          />
        </div>

        <div className="filter-row">
          <SlidersHorizontal size={17} />
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "filter active" : "filter"}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No sweets found</h3>
          <p>Try another search or category.</p>
        </div>
      )}
    </section>
  );
}
