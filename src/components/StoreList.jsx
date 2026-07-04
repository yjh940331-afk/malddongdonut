import stores from "../content/stores.json";
import SectionTitle from "./SectionTitle.jsx";
import Button from "./Button.jsx";
import R2Image from "./R2Image.jsx";

export default function StoreList() {
  return (
    <section className="stores-section page-section" id="stores" aria-labelledby="stores-title">
      <div className="page-section__inner">
        <SectionTitle
          eyebrow="Stores"
          title="Stores"
          description="말똥도넛을 만날 수 있는 공간"
          align="center"
        />

        <div className={`stores-grid ${stores.length === 1 ? "stores-grid--single" : ""}`}>
          {stores.map((store) => (
            <article className="store-card" key={store.name}>
              <div className="store-card__media">
                <R2Image src={store.image} alt={store.alt} loading="lazy" />
                <span className={`store-status store-status--${store.status}`}>
                  {store.status === "coming-soon" ? "준비 중" : "운영 중"}
                </span>
              </div>
              <div className="store-card__copy">
                <p>{store.shortName}</p>
                <h3>{store.name}</h3>
                <address>{store.address}</address>
                <p>{store.description}</p>
                <ul>
                  {store.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <span className="store-card__notice">운영시간은 지도에서 최신 정보 확인</span>
                <Button href={store.mapUrl} variant="ghost" aria-label={`${store.name} 네이버지도 열기`}>
                  지도에서 위치 확인하기
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
