import social from "../content/social.json";
import Button from "./Button.jsx";
import R2Image from "./R2Image.jsx";
import SectionTitle from "./SectionTitle.jsx";

export default function SocialSection() {
  return (
    <section className="social-section page-section" id="social" aria-labelledby="social-title">
      <div className="page-section__inner">
        <div className="social-section__head">
          <SectionTitle eyebrow="Social" title={social.title} description={social.description} />
          <div className="social-section__actions">
            <Button href={social.instagram}>Instagram</Button>
            <Button href={social.youtube} variant="secondary">
              YouTube
            </Button>
          </div>
        </div>

        <div className="social-grid">
          {social.items.map((item) => (
            <a
              className="social-card"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={item.title}
              aria-label={`${item.title} 인스타그램에서 보기`}
            >
              <div className="social-card__media">
                <R2Image src={item.image} alt={item.alt} loading="lazy" />
              </div>
              <div className="social-card__copy">
                <span>{item.title}</span>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
