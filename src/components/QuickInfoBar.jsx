import brand from "../content/brand.json";

export default function QuickInfoBar() {
  return (
    <section className="quick-info" aria-label="말똥도넛 빠른 정보">
      <div className="quick-info__inner">
        {brand.quickInfo.map((item) => (
          <article className="quick-info__item" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
