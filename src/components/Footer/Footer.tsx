import { PROFILE } from '../../data/content';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <a className={styles.logo} href="#inicio">
            <span className={styles.prompt}>$</span>
            {PROFILE.name.toLowerCase()}
          </a>

          <nav className={styles.socials} aria-label="Redes sociais">
            {PROFILE.socials.map((social) => (
              <a
                key={social.id}
                className={styles.socialLink}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} {PROFILE.name} — todos os direitos reservados.
          </p>
          <p className={styles.credit}>
            <span className={styles.creditHash}>#</span> construído com React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
