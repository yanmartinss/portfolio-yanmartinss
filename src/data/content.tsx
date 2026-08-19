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
  role: "Desenvolvedor Full-stack",
  tagline: "Transformando ideias em produtos digitais escaláveis.",
  bio: [
    <>
      Atuo no desenvolvimento e manutenção de sistemas corporativos de ponta a
      ponta, com foco em resolver problemas reais de negócio — não só escrever
      código. Minha stack principal é <strong>React</strong>,{" "}
      <strong>React Native</strong>, <strong>TypeScript</strong> e{" "}
      <strong>PostgreSQL</strong>, com experiência em ambientes ágeis e times
      multidisciplinares. Gosto de transformar requisitos ambíguos em software
      estável, testável e fácil de manter.
    </>,
  ],
  location: "Fortaleza, Brasil",
  availability: "Disponível para novas oportunidades",
  email: "yanmartinss05@gmail.com.br",
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
