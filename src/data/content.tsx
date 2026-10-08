import type { EducationItem, Profile } from "./types";

export { EXPERIENCES } from "./experiences";
export { PROJECTS } from "./projects";
export { SKILL_CATEGORIES } from "./skills";
export type {
  Experience,
  Project,
  SkillCategory,
  EducationItem,
} from "./types";

export const PROFILE: Profile = {
  name: "{Yan Martins}",
  firstName: "Yan Martins",
  role: "Engenheiro de Software",
  tagline: "Transformando ideias em produtos digitais escaláveis.",
  bio: [
    <>
      Engenheiro de Software especializado em desenvolvimento mobile com{" "}
      <strong>React Native</strong> e <strong>TypeScript</strong>, focado em
      integração de APIs REST, otimização de performance e entrega de soluções
      em produção. No dia a dia também atuo com <strong>React</strong>,{" "}
      <strong>Node.js</strong> e <strong>PostgreSQL</strong>, em times
      multidisciplinares com UX/UI, Backend e QA. Gosto de transformar
      requisitos ambíguos em software estável, testável e fácil de manter.
    </>,
  ],
  location: "Fortaleza, Brasil",
  availability: "Disponível para novas oportunidades",
  email: "yanmartinss05@gmail.com",
  resumeUrl: "/curriculo.pdf",
  socials: [
    { id: "github", label: "GitHub", url: "https://github.com/yanmartinss" },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://linkedin.com/in/yanmartinss",
    },
  ],
};

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-2",
    degree: "Bacharelado em Ciência da Computação",
    institution: "IFCE - Maracanaú",
    period: "2023 — Presente",
    status: "em andamento",
  },
];

export const NAV_LINKS = [
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "skills", label: "Habilidades" },
  { id: "contato", label: "Contato" },
] as const;
