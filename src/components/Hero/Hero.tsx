import { PROFILE } from "../../data/content";
import styles from "./Hero.module.css";

function KnotOrnament() {
  return (
    <svg
      className={styles.knot}
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 52C4 30 20 16 40 12h14M4 52c18 2 26-8 26-20M56 26c4 12 2 22-8 28M26 32C26 42 16 52 8 50"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="22" cy="34" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="52" cy="18" r="2.4" fill="currentColor" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <p className={styles.availability}>
            <span className={styles.statusDot} aria-hidden="true" />
            {PROFILE.availability}
          </p>

          <h1 className={styles.title}>
            Olá, eu sou <span className={styles.name}>{PROFILE.name}</span>
            <span className={styles.comma}>,</span>
            <br />
            {PROFILE.role}
            <span className={styles.cursor} aria-hidden="true">
              _
            </span>
          </h1>

          <p className={styles.tagline}>{PROFILE.tagline}</p>

          {PROFILE.bio.map((paragraph, i) => (
            <p key={i} className={styles.bio}>
              {paragraph}
            </p>
          ))}

          <p className={styles.location}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {PROFILE.location}
          </p>

          <div className={styles.actions}>
            <a
              className={styles.btnPrimary}
              href={
                PROFILE.socials.find((s) => s.id === "linkedin")?.url ?? "#"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
              LinkedIn
            </a>
            <a
              className={styles.btnGhost}
              href={PROFILE.socials.find((s) => s.id === "github")?.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div className={styles.photoWrap}>
          <div className={styles.photoCard}>
            <KnotOrnament />
            <div className={styles.photoFrame}>
              <img
                className={styles.photoImg}
                src="/foto.jpg"
                alt={`Foto de ${PROFILE.name}`}
              />
            </div>
            <KnotOrnament />
          </div>
          <p className={styles.photoCaption}>
            <span className={styles.captionHash}>#</span> dev /{" "}
            {PROFILE.firstName.toLowerCase()}
          </p>
        </div>
      </div>
    </section>
  );
}
