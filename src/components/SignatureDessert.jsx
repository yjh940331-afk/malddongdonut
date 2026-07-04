import menus from "../content/menus.json";
import SectionTitle from "./SectionTitle.jsx";

export default function SignatureDessert() {
  return (
    <section className="dessert-section page-section" id="menu" aria-labelledby="menu-title">
      <div className="page-section__inner">
        <SectionTitle
          eyebrow="Signature"
          title="Signature Desserts"
          description="고르는 순간부터 즐거운 말똥도넛의 달콤한 라인업"
          align="center"
        />

        <div className="dessert-grid">
          {menus.map((menu) => (
            <article className="dessert-card" key={menu.title}>
              <div className="dessert-card__media">
                <img
                  src={menu.image}
                  alt={menu.alt}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.hidden = true;
                  }}
                />
                <span>{menu.accent}</span>
              </div>
              <div className="dessert-card__copy">
                <h3>{menu.title}</h3>
                <p>{menu.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
