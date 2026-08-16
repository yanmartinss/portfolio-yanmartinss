import { SKILL_CATEGORIES } from '../../data/content';
import type { SkillCategory } from '../../data/types';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './Skills.module.css';

function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHead}>
        <span className={styles.glyph} aria-hidden="true">
          {category.glyph}
        </span>
        <h3 className={styles.title}>{category.title}</h3>
      </div>
      <ul className={styles.list}>
        {category.skills.map((skill) => (
          <li key={skill} className={styles.skill}>
            <span className={styles.skillMark} aria-hidden="true">
              ✓
            </span>
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <SectionHeading
        index="03"
        title="habilidades"
        subtitle="npx skills --list — meu arsenal para construir e entregar."
      />
      <div className={styles.grid}>
        {SKILL_CATEGORIES.map((category) => (
          <SkillCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
