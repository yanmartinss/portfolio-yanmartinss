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
      "Desenvolvi e mantive aplicativos móveis utilizando React Native e TypeScript, focando na alta performance e usabilidade para força de vendas.",
      "Implementei integrações com APIs RESTful, autenticação via JWT e fluxos para funcionamento offline com posterior sincronização de dados com o servidor.",
      "Estruturei a persistência local de dados e integrei recursos nativos do aparelho, como câmera, geolocalização e gestão de permissões.",
      "Construí módulos web multi-tenant com React.js e elaborei consultas SQL (PostgreSQL) para integração com o ERP da empresa.",
      "Desenvolvi módulo nativo em Kotlin para integração direta com impressoras térmicas (Gertec).",
      "Integrei a API do WhatsApp Business (Meta) para automação de mensagens.",
      "Criei consultas SQL otimizadas utilizando Java (JDBC) para relatórios gerenciais.",
      "Implementei integrações de dados entre o banco PostgreSQL e o sistema de gestão.",
      "Utilizei diariamente Git para versionamento de código, atuando em equipe sob metodologias ágeis.",
    ],
    stack: [
      "React",
      "React Native",
      "TypeScript",
      "PostgreSQL",
      "Java",
      "Kotlin",
      "WhatsApp API",
      "Git",
    ],
  },
];
