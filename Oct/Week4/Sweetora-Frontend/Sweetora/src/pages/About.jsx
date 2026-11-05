import { Heart, Leaf, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section className="page-section container">
      <div className="page-intro">
        <span className="eyebrow">OUR STORY</span>
        <h1>Sweetness, with a sense of occasion.</h1>
        <p className="large-copy">
          Sweetora is built around a simple idea: Indian sweets deserve the
          same thoughtful presentation and premium experience as the occasions
          they celebrate.
        </p>
      </div>

      <div className="story-grid">
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1100&q=85"
            alt="Sweetora story"
          />
        </div>
        <div className="story-copy">
          <span className="eyebrow">FROM TRADITION TO TODAY</span>
          <h2>Recipes that feel familiar. Details that feel new.</h2>
          <p>
            We celebrate the warmth of mithai while designing every part of
            the experience for today's gifting culture. From careful
            ingredient selection to elegant boxes, Sweetora keeps the emotion
            of traditional sweets at the centre.
          </p>

          <div className="story-points">
            <div><Heart size={20} /><span>Made for meaningful gifting</span></div>
            <div><Leaf size={20} /><span>Thoughtful ingredient choices</span></div>
            <div><Sparkles size={20} /><span>Premium presentation</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
