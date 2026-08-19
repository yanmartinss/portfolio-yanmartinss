import type { SkillCategory } from "./types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Linguagens & Frameworks",
    glyph: "</>",
    skills: ["React Native", "React", "TypeScript", "Node.js"],
  },
  {
    id: "databases",
    title: "Bancos de Dados & Ferramentas",
    glyph: "{}",
    skills: ["PostgreSQL", "Git & GitHub", "Docker", "Codex", "Prisma"],
  },
  {
    id: "methodologies",
    title: "Metodologias",
    glyph: "✓",
    skills: [
      "Desenvolvimento Ágil",
      "Code Review",
      "UX / Acessibilidade",
      "Kanban",
    ],
  },
];
