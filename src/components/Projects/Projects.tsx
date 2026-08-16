import { PROJECTS } from '../../data/content';
import type { Project } from '../../data/types';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './Projects.module.css';

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={styles.windowBar}>
        <span className={styles.windowDots} aria-hidden="true">
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </span>
        <span className={styles.windowTitle}>{project.title}</span>
      </div>

      <a
        className={styles.thumbnail}
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver código do projeto ${project.title}`}
      >
        <img
          src={project.image}
          alt={`Thumbnail do projeto ${project.title}`}
          loading="lazy"
          decoding="async"
          width="640"
          height="360"
        />
      </a>

      <div className={styles.cardBody}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <ul className={styles.tagRow}>
          {project.tags.map((tag, i) => (
            <li key={tag} className={i % 2 === 1 ? styles.tagAlt : styles.tag}>
              {tag}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          <a
            className={styles.link}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            Ver Código
          </a>
          {project.demoUrl ? (
            <a
              className={styles.link}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
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
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
              Ver Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projetos" className={styles.section}>
      <SectionHeading
        index="02"
        title="projetos"
        subtitle="ls ~/projetos — projetos públicos que construí e mantenho."
      />
      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
