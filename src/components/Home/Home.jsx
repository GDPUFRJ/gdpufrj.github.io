import styles from "./Home.module.css";
import gdpLogo from "../../assets/GDP_logo.svg";

const Home = () => {
  return (
    <main className={styles.home}>
      <section className={styles.content}>
        <img
          src={gdpLogo}
          alt="Logo do Grupo de Desenvolvimento de Jogos Eletrônicos da UFRJ"
          className={styles.logo}
        />

        <div className={styles.text_container}>
          <h1>GDP UFRJ</h1>

          <h2>Grupo de Desenvolvimento de Jogos Eletrônicos</h2>

          <p>
            Fundado em 2007, o Grupo de Desenvolvimento de Jogos Eletrônicos da
            UFRJ reúne estudantes interessados na criação e no desenvolvimento
            de jogos digitais.
          </p>

          <p>
            Ao longo dos anos, a GDP passou por diferentes projetos e
            experiências, mantendo como propósito o aprendizado, a colaboração e
            a paixão por criar.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
