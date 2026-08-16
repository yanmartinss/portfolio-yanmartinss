import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      <h2 className={styles.title}>
        <span className={styles.index}>{index}.</span>
        <span className={styles.hash}>#</span>
        {title}
      </h2>
      <div className={styles.rule} aria-hidden="true" />
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </div>
  );
}
