import styles from "./Home.module.css";
import gdpLogo from "../../assets/GDP_logo.svg";

import cardArte from "../../assets/areas/card_arte.svg";
import cardGD from "../../assets/areas/card_gd.svg";
import cardProducao from "../../assets/areas/card_producao.svg";
import cardProgramacao from "../../assets/areas/card_programacao.svg";
import cardRoteiro from "../../assets/areas/card_roteiro.svg";
import cardSom from "../../assets/areas/card_som.svg";

import imgProg from "../../assets/areas/SimboloProg.png";
import imgArte from "../../assets/areas/SimboloArte.png";
import imgGD from "../../assets/areas/SimboloGD.png";
import imgRoteiro from "../../assets/areas/SimboloRoteiro.png";
import imgSom from "../../assets/areas/SimboloSom.png";
import imgProducao from "../../assets/areas/SimboloProducao.png";


const areaCards = [
  {
    name: "Programação",
    image: imgProg,
    color: "text_prog",
    text: "Responsável por implementar sistemas, mecânicas e assets desenvolvidos pelo time."
  },
  {
    name: "Arte",
    image: imgArte,
    color: "text_art",
    text: "Responsável em criar os assets visuais do jogo. Do 2D ao 3D, do visual das personagens aos cenários e até UI do jogo."
  },
  {
    name: "Game Design",
    image: imgGD,
    color: "text_gd",
    text: "Também conhecido como arquiteto do jogo. Planeja as mecânicas e funcionalidades pensando como os jogadores interagirão com o jogo."
  },
  {
    name: "Roteiro",
    image: imgRoteiro,
    color: "text_roteiro",
    text: "Desenvolve toda a parte narrativa, desde diálogos, personagens e até a construção do mundo em que se passa o jogo."
  },
  {
    name: "Sonorização",
    image: imgSom,
    color: "text_som",
    text: "Responsável em criar os assets sonoros do jogo, desde SFX até músicas próprias para compor a trilha sonora."
  },
  {
    name: "Produção",
    image: imgProducao,
    color: "text_producao",
    text: "Quem organiza a equipe, cuidando do escopo do projeto e das tarefas de cada integrante. Esse cargo é apenas para quem já está algum tempo dentro da GDP."
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
                <div className={styles.area_cards}>
                  <h2 className={card.color}>{card.name}</h2>
                  <p>{card.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
};

export default Home;
