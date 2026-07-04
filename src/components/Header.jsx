import { useState } from "react";
import brand from "../content/brand.json";
import Button from "./Button.jsx";

const navItems = [
  { label: "Brand", href: "#brand" },
  { label: "Menu", href: "#menu" },
  { label: "Space", href: "#space" },
  { label: "Stores", href: "#stores" },
  { label: "Social", href: "#social" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        본문으로 바로가기
      </a>
      <div className="site-header__inner">
        <a className="site-logo" href="#top" aria-label="말똥도넛 첫 화면으로 이동" onClick={closeMenu}>
          <span>MALDDONG</span>
          <strong>DONUT</strong>
        </a>

        <nav className={`site-nav ${open ? "is-open" : ""}`} id="site-nav" aria-label="주요 메뉴">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <Button href={brand.links.map} variant="secondary" aria-label="네이버지도에서 말똥도넛 위치 보기">
            지도 보기
          </Button>
          <button
            className="menu-toggle"
            type="button"
            aria-controls="site-nav"
            aria-expanded={open}
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
