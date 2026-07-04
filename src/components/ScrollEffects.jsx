import { useEffect } from "react";

const REVEAL_SELECTOR = [
  ".hero-copy",
  ".hero-collage",
  ".quick-info__item",
  ".section-title-block",
  ".social-profile-card",
  ".social-mini-card",
  ".youtube-card",
  ".dessert-card__media",
  ".dessert-card__copy",
  ".gallery-card__media",
  ".gallery-card__copy",
  ".store-highlight__media",
  ".store-highlight__copy",
  ".store-card__media",
  ".store-card__copy",
].join(",");

export default function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector(".site-header");
    const revealTargets = [...document.querySelectorAll(REVEAL_SELECTOR)];
    let frame = 0;

    root.classList.add("motion-ready");

    revealTargets.forEach((target, index) => {
      target.classList.add("scroll-reveal");
      target.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 55}ms`);
    });

    const updateScrollState = () => {
      frame = 0;
      const scrollY = window.scrollY || 0;
      const cappedScroll = Math.min(scrollY, 520);

      root.style.setProperty("--hero-media-shift", `${cappedScroll * 0.035}px`);
      root.style.setProperty("--decor-donut-shift", `${cappedScroll * -0.02}px`);
      root.style.setProperty("--decor-gelato-shift", `${cappedScroll * 0.024}px`);
      root.style.setProperty("--decor-spark-shift", `${cappedScroll * -0.016}px`);
      header?.classList.toggle("is-scrolled", scrollY > 10);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateScrollState);
    };

    if (!("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
      updateScrollState();
      window.addEventListener("scroll", onScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", onScroll);
        if (frame) window.cancelAnimationFrame(frame);
        root.classList.remove("motion-ready");
        root.style.removeProperty("--hero-media-shift");
        root.style.removeProperty("--decor-donut-shift");
        root.style.removeProperty("--decor-gelato-shift");
        root.style.removeProperty("--decor-spark-shift");
        header?.classList.remove("is-scrolled");
        revealTargets.forEach((target) => {
          target.classList.remove("scroll-reveal", "is-visible");
          target.style.removeProperty("--reveal-delay");
        });
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14,
      },
    );

    revealTargets.forEach((target) => observer.observe(target));
    updateScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      observer.disconnect();
      root.classList.remove("motion-ready");
      root.style.removeProperty("--hero-media-shift");
      root.style.removeProperty("--decor-donut-shift");
      root.style.removeProperty("--decor-gelato-shift");
      root.style.removeProperty("--decor-spark-shift");
      header?.classList.remove("is-scrolled");
      revealTargets.forEach((target) => {
        target.classList.remove("scroll-reveal", "is-visible");
        target.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return null;
}
