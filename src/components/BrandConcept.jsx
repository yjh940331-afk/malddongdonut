import brand from "../content/brand.json";
import SectionTitle from "./SectionTitle.jsx";

export default function BrandConcept() {
  return (
    <section className="brand-concept page-section" id="brand" aria-labelledby="brand-title">
      <div className="page-section__inner brand-concept__inner">
        <SectionTitle
          eyebrow={brand.concept.eyebrow}
          title={brand.concept.title}
          description={brand.concept.description}
        />

        <div className="concept-grid">
          {brand.concept.cards.map((card, index) => (
            <article className="concept-card" key={card.title}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
