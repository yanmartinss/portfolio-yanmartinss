import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "proj-4",
    title: "MyAlbum - Álbum Virtual da Copa",
    description:
      "Aplicação full-stack para gerenciar, acompanhar e trocar figurinhas do álbum da Copa: controle de coleção, repetidas, faltantes e trocas atômicas com transações do Prisma.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Docker",
    ],
    image: "/myalbum.jpg",
    githubUrl: "https://github.com/yanmartinss/myalbum_wc",
    demoUrl: "https://myalbum-wc.vercel.app",
  },
  {
    id: "proj-5",
    title: "Apple Page - Clone",
    description:
      "Treinamento de CSS: clone responsivo da página inicial da Apple, com foco em layout, animações de scroll e fidelidade visual ao design original.",
    tags: ["HTML", "CSS"],
    image: "/applepage.png",
    githubUrl: "https://github.com/yanmartinss/apple-page",
    demoUrl: "https://yanmartinss.github.io/apple-page/",
  },
];
