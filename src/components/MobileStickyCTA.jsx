import brand from "../content/brand.json";

export default function MobileStickyCTA() {
  return (
    <aside className="mobile-sticky-cta" aria-label="빠른 이동 링크">
      <a href={brand.links.map} target="_blank" rel="noopener noreferrer">
        지도 보기
      </a>
      <a href={brand.links.instagram} target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
    </aside>
  );
}
