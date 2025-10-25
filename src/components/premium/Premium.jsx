import React from "react";
import "./Premium.css";

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: "$0",
    note: "/mo",
    features: ["Ad‑supported", "Standard quality", "Limited skips"],
  },
  {
    id: "standard",
    name: "Standard",
    price: "$4.99",
    note: "/mo",
    features: ["Ad‑free", "Offline downloads", "High-quality audio"],
  },
  {
    id: "family",
    name: "Family",
    price: "$9.99",
    note: "/mo",
    features: ["Up to 6 accounts", "Parental controls", "Offline downloads"],
  },
];

export default function Premium() {
  return (
    <section id="premium" className="premium" aria-label="Premium plans">
      <div className="inner">
        <h3>Premium Plans</h3>
        <div className="plans">
          {plans.map((p) => (
            <article
              key={p.id}
              className={`plan ${p.highlight ? "featured" : ""}`}
            >
              <div className="plan-head">
                <h4>{p.name}</h4>
                <div className="price">
                  {p.price} <span>{p.note}</span>
                </div>
              </div>
              <ul>
                {p.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <a href="#" className="cta">
                Choose
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
