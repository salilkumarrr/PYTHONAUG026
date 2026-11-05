import { ArrowRight, Crown, Gift, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { offers, products, reviews } from "../data/products";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";

const offerIcons = { gift: Gift, sparkles: Sparkles, crown: Crown };

export default function Home({ onAddToCart }) {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="eyebrow light">THE ART OF INDIAN SWEETS</span>
          <h1>Made for moments<br />worth celebrating.</h1>
          <p>
            Premium mithai, handcrafted with timeless recipes and the finest
            ingredients.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="button button-gold">
              Shop Collection <ArrowRight size={18} />
            </Link>
            <Link to="/categories" className="text-button light-text">
              Explore categories
            </Link>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <div><strong>100%</strong><span>Freshly Packed</span></div>
          <div><strong>Premium</strong><span>Handpicked Ingredients</span></div>
          <div><strong>Pan India</strong><span>Delivery Available</span></div>
          <div><strong>4.9/5</strong><span>Loved by Customers</span></div>
        </div>
      </section>

      <section className="section container">
        <SectionHeading
          eyebrow="OUR FAVOURITES"
          title="Sweets everyone talks about"
          description="Discover our most-loved mithai, made for gifting and celebrations."
          action={<Link to="/shop" className="outline-button">View All</Link>}
        />

        <div className="product-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      <section className="editorial">
        <div className="container editorial-grid">
          <div className="editorial-image">
            <img
              src="https://images.unsplash.com/photo-1605196560549-9d9cb8d06f7d?auto=format&fit=crop&w=1200&q=85"
              alt="Premium Indian sweets"
            />
          </div>
          <div className="editorial-copy">
            <span className="eyebrow">A SWEETER TRADITION</span>
            <h2>Old-world recipes.<br />Modern indulgence.</h2>
            <p>
              At Sweetora, every box is a little celebration. We bring
              cherished Indian recipes into beautifully crafted collections,
              balancing nostalgia with a premium contemporary experience.
            </p>
            <Link to="/about" className="text-button">
              Discover our story <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeading
          eyebrow="WHY SWEETORA"
          title="The little things make it special"
          description="From ingredients to presentation, every detail gets the attention it deserves."
        />

        <div className="feature-grid">
          {offers.map((offer) => {
            const Icon = offerIcons[offer.icon];

            return (
              <div className="feature-card" key={offer.title}>
                <div className="feature-icon"><Icon size={23} /></div>
                <h3>{offer.title}</h3>
                <p>{offer.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="review-section">
        <div className="container">
          <SectionHeading
            eyebrow="CUSTOMER LOVE"
            title="Sweet words from our customers"
          />

          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="review-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={15} fill="currentColor" />
                  ))}
                </div>
                <p>“{review.text}”</p>
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.location}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
