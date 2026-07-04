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

        <div className="social-mix">
          <a
            className="social-profile-card"
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="말똥도넛 공식 인스타그램 보기"
          >
            <span className="social-profile-card__avatar" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5.5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <div>
              <p>Instagram</p>
              <h3>{social.instagramProfile.handle}</h3>
              <span>{social.instagramProfile.bio}</span>
              <ul>
                <li>{social.instagramProfile.followers} followers</li>
                <li>{social.instagramProfile.posts} posts</li>
                <li>{social.instagramProfile.hours}</li>
              </ul>
            </div>
          </a>

          <div className="social-mini-grid" aria-label="인스타그램 분위기 카드">
            {social.items.map((item) => (
              <a className="social-mini-card" href={item.url} target="_blank" rel="noopener noreferrer" key={item.title}>
                <R2Image src={item.image} alt={item.alt} loading="lazy" />
                <div>
                  <span>{item.title}</span>
                  <p>{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="youtube-strip" aria-label="말똥도넛 유튜브 영상">
          <div className="youtube-strip__head">
            <span>YouTube</span>
            <p>쇼츠와 영상으로 보는 말똥도넛의 달콤한 장면.</p>
          </div>

          <div className="youtube-grid">
            {social.youtubeVideos.map((video) => (
              <a className="youtube-card" href={video.url} target="_blank" rel="noopener noreferrer" key={video.url}>
                <div className="youtube-card__thumb">
                  <R2Image src={video.thumbnail} alt="" loading="lazy" />
                  <span aria-hidden="true">Play</span>
                </div>
                <div>
                  <span>{video.meta}</span>
                  <h3>{video.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
