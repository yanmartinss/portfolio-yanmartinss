import type { Experience } from "./types";

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-4",
    hash: "a1b2c3d",
    fileName: "experiencias/ivitech.ts",
    period: "Out. 2024 — Presente",
    role: "Estagiário → Desenvolvedor Júnior",
    company: "Ivitech Tecnologia",
    current: true,
    isCLT: true,
    description:
      "Software house focada em sistemas ERP e no desenvolvimento de soluções web e mobile complementares.",
    bullets: [
      "Desenvolvi interfaces responsivas em React Native para os aplicativos IVIVENDA e IVICHECK, alcançando 95% de satisfação dos usuários e aumentando a retenção em 50% ao longo de 2 anos.",
      "Implementei persistência local com SQLite e integrei recursos nativos (câmera, geolocalização e permissões), melhorando a performance em 15% e a satisfação do usuário em 20%.",
      "Implementei integrações com APIs RESTful, autenticação via JWT e funcionamento offline com sincronização posterior dos dados com o servidor.",
      "Desenvolvi APIs RESTful em Node.js com PostgreSQL, aumentando a eficiência em 30% e reduzindo a latência em 20%.",
      "Implementei tratamento de erros com filas e retries, reduzindo falhas nas integrações em 25%.",
      "Desenvolvi dashboards analíticos em React.js, melhorando a visualização de dados em 40% e facilitando a tomada de decisão da equipe em 70%.",
      "Construí módulos web multi-tenant em React.js e consultas SQL otimizadas (PostgreSQL, Java/JDBC) para relatórios gerenciais e integração com o ERP.",
      "Integrei a API do WhatsApp Business (Meta) para automação de mensagens.",
      "Participei das decisões de arquitetura e dos code reviews, colaborando com UX/UI, Backend e QA.",
    ],
    stack: [
      "React Native",
      "TypeScript",
      "SQLite",
      "React",
      "Node.js",
      "PostgreSQL",
      "Java",
      "WhatsApp API",
      "Expo",
    ],
  },
];
