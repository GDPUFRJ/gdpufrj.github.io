import styles from "./Home.module.css";
import gdpLogo from "../../assets/GDP_logo.svg";

import cardArte from "../../assets/areas/card_arte.svg";
import cardGD from "../../assets/areas/card_gd.svg";
import cardProducao from "../../assets/areas/card_producao.svg";
import cardProgramacao from "../../assets/areas/card_programacao.svg";
import cardRoteiro from "../../assets/areas/card_roteiro.svg";
import cardSom from "../../assets/areas/card_som.svg";

const areaCards = [
  {
    name: "Programação",
    image: cardProgramacao,
  },
  {
    name: "Arte",
    image: cardArte,
  },
  {
    name: "Game Design",
    image: cardGD,
  },
  {
    name: "Roteiro",
    image: cardRoteiro,
  },
  {
    name: "Sonorização",
    image: cardSom,
  },
  {
    name: "Produção",
    image: cardProducao,
  },
];

const Home = () => {
  return (
    <main className={styles.home}>
      <section className={styles.content}>
        <div className={styles.intro}>
          <img
            src={gdpLogo}
            alt="Logo do Grupo de Desenvolvimento de Jogos Eletrônicos da UFRJ"
            className={styles.logo}
          />

          <div className={styles.text_container}>
            <h1>GDP UFRJ</h1>

            <h2>Grupo de Desenvolvimento de Jogos Eletrônicos</h2>

            <p>
              Fundado em 2007, o Grupo de Desenvolvimento de Jogos Eletrônicos
              da UFRJ reúne estudantes interessados na criação e no
              desenvolvimento de jogos digitais.
            </p>

            <p>
              Ao longo dos anos, a GDP passou por diferentes projetos e
              experiências, mantendo como propósito o aprendizado, a colaboração
              e a paixão por criar.
            </p>
          </div>
        </div>

        <section className={styles.areas_section}>
          <h2>Áreas de Atuação</h2>

          <p className={styles.areas_description}>
            Dentro da GDP, integrantes se juntam em grupos (entre 8 a 12
            pessoas) para poder trabalhar num projeto de jogo e cada integrante
            assume um cargo dentro da equipe para tornar o jogo uma realidade.
          </p>

          <ul className={styles.areas}>
            {areaCards.map((card) => (
              <li key={card.name}>
                <img src={card.image} alt={`Área de atuação: ${card.name}`} />
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
};

export default Home;
