import type { SkillCategory } from "./types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Mobile & Front-end",
    glyph: "</>",
    skills: [
      "React Native",
      "TypeScript",
      "React",
      "SQLite",
      "Firebase",
      "Tailwind CSS",
    ],
  },
  {
    id: "databases",
    title: "Back-end, Dados & Ferramentas",
    glyph: "{}",
    skills: [
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
      "Git & GitHub",
      "CI/CD",
      "Codex",
      "Claude Code",
    ],
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
