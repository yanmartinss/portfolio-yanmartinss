import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import EducationContact from "./components/EducationContact/EducationContact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#inicio">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <EducationContact />
      </main>
      <Footer />
    </>
  );
}
