import { useState, type ChangeEvent, type FormEvent } from "react";
import { EDUCATION, PROFILE } from "../../data/content";
import type { EducationItem } from "../../data/types";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./EducationContact.module.css";

interface FormState {
  nome: string;
  email: string;
  mensagem: string;
}

const INITIAL_FORM: FormState = { nome: "", email: "", mensagem: "" };

function EducationRow({ item }: { item: EducationItem }) {
  const isCurrent = item.status === "em andamento";
  return (
    <li className={styles.eduItem}>
      <div className={styles.eduLine}>
        <span className={styles.eduDot} aria-hidden="true" />
        <div>
          <h3 className={styles.eduDegree}>{item.degree}</h3>
          <p className={styles.eduInstitution}>
            {item.institution}{" "}
            <span className={styles.eduPeriod}>· {item.period}</span>
          </p>
        </div>
      </div>
      <span
        className={`${styles.statusBadge} ${isCurrent ? styles.statusCurrent : styles.statusDone}`}
      >
        {isCurrent ? "em andamento" : "concluído"}
      </span>
    </li>
  );
}

export default function EducationContact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: integrar com Formspree, EmailJS ou uma API route
    console.log("[contato] payload:", form);
    setForm(INITIAL_FORM);
  };

  return (
    <section id="contato" className={styles.section}>
      <SectionHeading
        index="04"
        title="formação & contato"
        subtitle="cat educacao.txt contato.txt — currículo acadêmico e canais para falar comigo."
      />

      <div className={styles.grid}>
        <div className={styles.education}>
          <h3 className={styles.blockTitle}>
            <span className={styles.blockPrompt}>$</span> educação
          </h3>
          <ul className={styles.eduList}>
            {EDUCATION.map((item) => (
              <EducationRow key={item.id} item={item} />
            ))}
          </ul>
        </div>

        <div className={styles.contact}>
          <h3 className={styles.blockTitle}>
            <span className={styles.blockPrompt}>$</span> contato
          </h3>

          <div className={styles.contactLinks}>
            <a className={styles.contactLink} href={`mailto:${PROFILE.email}`}>
              <span className={styles.linkGlyph}>@</span>
              {PROFILE.email}
            </a>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="nome">
                nome
              </label>
              <input
                className={styles.input}
                id="nome"
                name="nome"
                type="text"
                placeholder="Seu nome"
                required
                autoComplete="name"
                value={form.nome}
                onChange={handleChange}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                email
              </label>
              <input
                className={styles.input}
                id="email"
                name="email"
                type="email"
                placeholder="voce@exemplo.com"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="mensagem">
                mensagem
              </label>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                id="mensagem"
                name="mensagem"
                placeholder="Escreva sua mensagem..."
                required
                rows={4}
                value={form.mensagem}
                onChange={handleChange}
              />
            </div>

            <button className={styles.submit} type="submit">
              Enviar mensagem
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
