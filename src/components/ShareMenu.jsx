import { useEffect, useRef, useState } from "react";

const SHARE_TITLE = "말똥도넛 | MALDDONG DONUT";
const SHARE_TEXT = "파주의 컬러풀 디저트 타운, 말똥도넛 🍩";
const FALLBACK_URL = "https://malddongdonut.com/";

export default function ShareMenu() {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState("");
  const ref = useRef(null);
  const timer = useRef(null);

  useEffect(() => {
    const onDoc = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const flash = (message) => {
    setToast(message);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(""), 1800);
  };

  const getUrl = () => (typeof window !== "undefined" ? window.location.href : FALLBACK_URL);

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(getUrl());
      flash("링크가 복사되었어요");
    } catch {
      flash("복사에 실패했어요");
    }
    setOpen(false);
  };

  const shareKakao = async () => {
    setOpen(false);
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: SHARE_TITLE, text: SHARE_TEXT, url: getUrl() });
      } catch {
        /* 사용자가 취소한 경우 무시 */
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(getUrl());
      flash("링크 복사됨 · 카카오톡에 붙여넣어 주세요");
    } catch {
      flash("복사에 실패했어요");
    }
  };

  return (
    <div className="share-menu" ref={ref}>
      <button
        className="share-menu__trigger"
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="공유하기"
        onClick={() => setOpen((current) => !current)}
      >
        <svg
          viewBox="0 0 24 24"
          width="17"
          height="17"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.6" y1="10.5" x2="15.4" y2="6.5" />
          <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
        </svg>
        <span>공유</span>
      </button>

      {open ? (
        <div className="share-menu__popover" role="menu">
          <button type="button" role="menuitem" onClick={copyUrl}>
            URL 복사
          </button>
          <button type="button" role="menuitem" onClick={shareKakao}>
            카카오톡 공유
          </button>
        </div>
      ) : null}

      {toast ? (
        <span className="share-menu__toast" role="status">
          {toast}
        </span>
      ) : null}
    </div>
  );
}
