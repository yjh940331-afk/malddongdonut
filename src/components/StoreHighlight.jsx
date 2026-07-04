import brand from "../content/brand.json";
import stores from "../content/stores.json";
import Button from "./Button.jsx";
import R2Image from "./R2Image.jsx";

export default function StoreHighlight() {
  const featuredStore = stores.find((store) => store.isFeatured) || stores[0];

  if (!featuredStore) return null;

  return (
    <section className="store-highlight page-section" aria-labelledby="featured-store-title">
      <div className="page-section__inner store-highlight__inner">
        <div className="store-highlight__media">
          <R2Image src={featuredStore.image} alt={featuredStore.alt} loading="lazy" />
          <span>PAJU DESSERT TOWN</span>
        </div>

        <div className="store-highlight__copy">
          <p className="section-eyebrow">Visit Malddong Donut Paju</p>
          <h2 id="featured-store-title">{featuredStore.name}</h2>
          <p>
            파주 나들이 코스와 잘 어울리는 컬러풀한 디저트 타운입니다. 도넛, 젤라또, 케이크,
            음료와 포토 스팟을 한 번에 즐길 수 있습니다.
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
            <Button href={featuredStore.mapUrl}>위치</Button>
            <Button href={brand.links.instagram} variant="secondary">
              IG
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
