import brand from "../content/brand.json";
import stores from "../content/stores.json";

export default function Footer() {
  const representativeStore = stores.find((store) => store.isFeatured) || stores[0];

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__brand">{brand.englishName}</p>
          <p>{brand.description}</p>
        </div>

        <nav className="site-footer__links" aria-label="말똥도넛 외부 링크">
          <a href={brand.links.map} target="_blank" rel="noopener noreferrer">
            네이버지도
          </a>
          <a href={brand.links.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={brand.links.youtube} target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </nav>

        {representativeStore ? <address>{representativeStore.address}</address> : null}
        <p className="site-footer__copy">© MALDDONG DONUT. All rights reserved.</p>
      </div>
    </footer>
  );
}
