import brand from "../content/brand.json";

export default function MobileStickyCTA() {
  return (
    <aside className="mobile-sticky-cta" aria-label="빠른 이동 링크">
      <a href={brand.links.instagram} target="_blank" rel="noopener noreferrer">
        인스타그램
      </a>
      <a href={brand.links.map} target="_blank" rel="noopener noreferrer">
        네이버지도
      </a>
    </aside>
  );
}
