import { EXPERIENCES, PROFILE } from '../../data/content';
import type { Experience } from '../../data/types';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './Experience.module.css';

function TagRow({ tags }: { tags: string[] }) {
  return (
    <ul className={styles.tagRow}>
      {tags.map((tag, i) => (
        <li key={tag} className={i % 2 === 1 ? styles.tagAlt : styles.tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

function CommitCard({ item }: { item: Experience }) {
  return (
    <article className={styles.card}>
      <div className={styles.windowBar}>
        <span className={styles.windowDots} aria-hidden="true">
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </span>
        <span className={styles.fileName}>{item.fileName}</span>
        <span className={styles.hash}>#{item.hash}</span>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardHead}>
          <h3 className={styles.role}>{item.role}</h3>
          <span className={styles.period}>{item.period}</span>
        </div>
        <p className={styles.company}>
          <span className={styles.commitArrow}>→</span>
          {item.company}
          {item.current ? <span className={styles.currentBadge}>atual</span> : null}
          {item.isCLT ? <span className={styles.cltBadge}>CLT</span> : null}
        </p>
        <p className={styles.description}>{item.description}</p>
        {item.bullets && item.bullets.length > 0 ? (
          <ul className={styles.bullets}>
            {item.bullets.map((bullet) => (
              <li key={bullet} className={styles.bullet}>
                {bullet}
              </li>
            ))}
          </ul>
        ) : null}
        <TagRow tags={item.stack} />
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experiencia" className={styles.section}>
      <SectionHeading
        index="01"
        title="experiência"
        subtitle={`git log --oneline --author="${PROFILE.name}" — o histórico da minha carreira.`}
      />
      <ol className={styles.timeline}>
        {EXPERIENCES.map((item) => (
          <li key={item.id} className={styles.item}>
            <span className={styles.node} aria-hidden="true">
              <span className={styles.nodeCore} />
            </span>
            <div className={styles.commitMeta}>
              <span className={styles.commitSubject}>feat: {item.role}</span>
              <span className={styles.commitHash}>{item.hash}</span>
            </div>
            <CommitCard item={item} />
          </li>
        ))}
      </ol>
    </section>
  );
}
