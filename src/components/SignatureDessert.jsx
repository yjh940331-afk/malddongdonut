import menus from "../content/menus.json";
import R2Image from "./R2Image.jsx";
import SectionTitle from "./SectionTitle.jsx";

export default function SignatureDessert() {
  return (
    <section className="dessert-section page-section" id="menu" aria-labelledby="menu-title">
      <div className="page-section__inner">
        <SectionTitle
          eyebrow="Signature"
          title="Signature Desserts"
          description="도넛부터 젤라또, 케이크와 음료까지 한 공간에서 고르는 말똥도넛의 디저트 라인업."
          align="center"
        />

        <div className="dessert-grid">
          {menus.map((menu) => (
            <article className="dessert-card" key={menu.title}>
              <div className="dessert-card__media">
                <R2Image src={menu.image} alt={menu.alt} loading="lazy" />
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
