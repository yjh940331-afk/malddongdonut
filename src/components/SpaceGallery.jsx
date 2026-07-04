import gallery from "../content/gallery.json";
import R2Image from "./R2Image.jsx";
import SectionTitle from "./SectionTitle.jsx";

export default function SpaceGallery() {
  return (
    <section className="gallery-section page-section" id="space" aria-labelledby="space-title">
      <div className="page-section__inner">
        <SectionTitle
          eyebrow="Space / Photo Spot"
          title="A Sweet Playground"
          description="먹는 공간을 넘어, 사진 찍고 머무는 디저트 플레이스"
        />

        <div className="gallery-rail" aria-label="말똥도넛 공간 갤러리">
          {gallery.map((item) => (
            <article className="gallery-card" key={item.title}>
              <div className="gallery-card__media">
                <R2Image src={item.thumb || item.image} alt={item.alt} loading="lazy" />
              </div>
              <div className="gallery-card__copy">
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
