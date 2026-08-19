import { useEffect, useState } from "react";
import { NAV_LINKS, PROFILE } from "../../data/content";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#inicio" className={styles.logo}>
          <span className={styles.prompt}>$</span>
          <span className={styles.logoText}>
            {PROFILE.firstName.toLowerCase()}
            <span className={styles.logoPath}>/portfolio</span>
          </span>
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a className={styles.navLink} href={`#${link.id}`}>
                  <span className={styles.navIndex}>
                    0{NAV_LINKS.findIndex((l) => l.id === link.id) + 1}.
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className={styles.cta} href={PROFILE.resumeUrl} download>
          Baixar Currículo
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 3v12" />
            <path d="m7 10 5 5 5-5" />
            <path d="M5 21h14" />
          </svg>
        </a>
      </div>
    </header>
  );
}
