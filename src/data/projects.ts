import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "proj-6",
    title: "Store Web - E-commerce Full-Stack",
    description:
      "E-commerce full-stack com catálogo de produtos, frete por CEP, carrinho persistente, autenticação via cookies httpOnly, proteção contra XSS, rate limiting e checkout com Stripe.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Docker",
    ],
    image: "/store-web.jpg",
    githubUrl: "https://github.com/yanmartinss/store-web",
  },
  {
    id: "proj-7",
    title: "Desafio Mobile - Roteirização",
    description:
      "Aplicativo mobile offline-first para leitura de medidores e roteirização em campo, com captura de foto, geolocalização, OCR on-device e visualização de rotas em mapa.",
    tags: ["React Native", "Expo", "TypeScript", "SQLite", "Zustand"],
    image: "/desafio-mobile.jpg",
    githubUrl: "https://github.com/yanmartinss/desafio-mobile-roteirizacao",
  },
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
    title: "Promoções de Livros",
    description:
      "Aplicação feita em Typescript que divulga promoções de livros automaticamente de marketplaces como Amazon e Mercado Livre em um canal de telegram através de um bot.",
    tags: [
      "Node.js",
      "TypeScript",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Docker",
    ],
    image: "/geek-promos.jpg",
    githubUrl: "https://github.com/yanmartinss/geek-promos",
    demoUrl: "https://t.me/livrospromosbr",
  },
];
