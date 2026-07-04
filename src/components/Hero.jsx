import brand from "../content/brand.json";
import Button from "./Button.jsx";

export default function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-section__media" aria-hidden="true">
        <picture>
          <source media="(max-width: 767px)" srcSet={brand.hero.imageMobile} />
          <img
            src={brand.hero.imageDesktop}
            alt=""
            onError={(event) => {
              event.currentTarget.hidden = true;
            }}
          />
        </picture>
      </div>

      <div className="hero-section__decor hero-section__decor--donut" aria-hidden="true" />
      <div className="hero-section__decor hero-section__decor--gelato" aria-hidden="true" />
      <div className="hero-section__decor hero-section__decor--spark" aria-hidden="true" />

      <div className="hero-section__inner">
        <div className="hero-copy">
          <p className="hero-copy__eyebrow">{brand.hero.eyebrow}</p>
          <h1 id="hero-title">{brand.hero.title}</h1>
          <p className="hero-copy__description">{brand.hero.description}</p>

          <div className="hero-copy__actions" aria-label="주요 링크">
            <Button href={brand.links.map}>매장 위치 보기</Button>
            <Button href={brand.links.instagram} variant="ghost">
              인스타그램 보기
            </Button>
          </div>

          <ul className="keyword-list" aria-label="말똥도넛 키워드">
            {brand.keywords.map((keyword) => (
              <li key={keyword}>{keyword}</li>
            ))}
          </ul>
        </div>

        <div className="hero-collage" aria-label={brand.hero.imageAlt}>
          <div className="hero-collage__card hero-collage__card--main">
            <picture>
              <source media="(max-width: 767px)" srcSet={brand.hero.imageMobile} />
              <img
                src={brand.hero.imageDesktop}
                alt={brand.hero.imageAlt}
                onError={(event) => {
                  event.currentTarget.hidden = true;
                }}
              />
            </picture>
            <span>Pink Dessert Town</span>
          </div>
          <div className="hero-collage__note hero-collage__note--one">DONUT</div>
          <div className="hero-collage__note hero-collage__note--two">PHOTO</div>
        </div>
      </div>
    </section>
  );
}
