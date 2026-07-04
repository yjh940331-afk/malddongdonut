import brand from "../content/brand.json";
import stores from "../content/stores.json";
import Button from "./Button.jsx";

export default function StoreHighlight() {
  const featuredStore = stores.find((store) => store.isFeatured) || stores[0];

  if (!featuredStore) return null;

  return (
    <section className="store-highlight page-section" aria-labelledby="featured-store-title">
      <div className="page-section__inner store-highlight__inner">
        <div className="store-highlight__media">
          <img
            src={featuredStore.image}
            alt={featuredStore.alt}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.hidden = true;
            }}
          />
          <span>PAJU DESSERT TOWN</span>
        </div>

        <div className="store-highlight__copy">
          <p className="section-eyebrow">Visit Malddong Donut Paju</p>
          <h2 id="featured-store-title">{featuredStore.name}</h2>
          <p>
            파주 나들이 코스에 어울리는 핑크빛 디저트타운. 도넛, 젤라또, 케이크,
            음료 그리고 포토존까지 한 번에 즐길 수 있는 말똥도넛 대표 매장입니다.
          </p>

          <dl className="store-facts">
            <div>
              <dt>주소</dt>
              <dd>{featuredStore.address}</dd>
            </div>
            <div>
              <dt>운영시간</dt>
              <dd>{featuredStore.hoursNotice}</dd>
            </div>
            <div>
              <dt>특징</dt>
              <dd>{featuredStore.tags.join(" · ")}</dd>
            </div>
          </dl>

          <div className="store-highlight__actions">
            <Button href={featuredStore.mapUrl}>네이버지도 열기</Button>
            <Button href={brand.links.instagram} variant="secondary">
              인스타그램 보기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
