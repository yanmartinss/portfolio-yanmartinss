# Portfolio — Yan Martins

Portfólio pessoal desenvolvido com React, TypeScript e Vite, com uma estética inspirada em terminal/editor de código. Apresenta experiência profissional, projetos, habilidades técnicas e formas de contato.

📄 [Currículo](./public/curriculo.pdf)

## Stack

- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev)
- [Oxlint](https://oxc.rs) para lint

## Estrutura

```
src/
├── components/     # Um componente por seção (Header, Hero, Experience, Projects, Skills, EducationContact, Footer)
├── data/           # Conteúdo do portfólio (perfil, experiências, projetos, skills) e mapa de cores por tecnologia
└── styles/         # Design tokens e estilos globais
```

Cada seção é um componente independente com seu próprio CSS Module. O conteúdo (textos, links, tags) fica centralizado em `src/data`, então atualizar informações não exige mexer em componentes.

## Rodando localmente

```bash
npm install
npm run dev
```

Outros scripts:

```bash
npm run build     # build de produção (type-check + vite build)
npm run lint       # oxlint
npm run preview    # preview do build de produção
```

## Destaques

- **Cards de projeto** com preview ampliável da imagem (lightbox) — clicar na miniatura amplia a imagem, clicar no restante do card abre o repositório.
- **Tags coloridas por tecnologia**, nas seções de Projetos e Habilidades, usando cores associadas a cada stack (React, TypeScript, Node.js, Docker etc.) definidas em `src/data/skillColors.ts`.

## Licença

Uso pessoal — sinta-se à vontade para usar como referência.
