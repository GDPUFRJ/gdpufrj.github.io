import styles from "./Home.module.css";
import gdpLogo from "../../assets/GDP_logo.svg";

import imgProg from "../../assets/areas/SimboloProg.png";
import imgArte from "../../assets/areas/SimboloArte.png";
import imgGD from "../../assets/areas/SimboloGD.png";
import imgRoteiro from "../../assets/areas/SimboloRoteiro.png";
import imgSom from "../../assets/areas/SimboloSom.png";
import imgProducao from "../../assets/areas/SimboloProducao.png";

import imgProjetos from "../../assets/setores/Projetos.png";
import imgPessoas from "../../assets/setores/Pessoas.png";
import imgConjunta from "../../assets/setores/Conjunta.png";
import imgComunicacao from "../../assets/setores/Comunicacao.png";
import imgConhecimento from "../../assets/setores/Conhecimento.png";

const areaCards = [
  {
    name: "Programação",
    image: imgProg,
    color: "text_prog",
    text: "Com o auxílio de Game Engines, implementa sistemas, mecânicas e assets desenvolvidos pelo time."
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
    text: "Quem organiza a equipe, cuidando do escopo do projeto e das tarefas de cada integrante. Esse cargo é apenas para quem já está algum tempo na GDP."
  }
];

const managementCard = [
  {
    name: "Gestão de Projetos",
    text: "Organiza os ciclos de projetos e garantir o padrão e as regras dos mesmos.",
    image: imgProjetos
  },
  {
    name: "Gestão de Pessoas",
    text: "Garante o bem estar dos integrantes da GDP e que o estatuto interno seja seguido.",
    image: imgPessoas
  },
  {
    name: "Gestão Conjunta",
    text: "Formada pelas duas gestões, administra a GDP e garante o seu funcionamento.",
    image: imgConjunta
  },
  {
    name: "Setor da Comunicação",
    text: "Gerencia as redes sociais e cuida da divulgação de eventos.",
    image: imgComunicacao
  },
  {
    name: "Setor do Conhecimento",
    text: "Busca auxiliar na passagem do conhecimento técnico e prático dentro e fora da GDP.",
    image: imgConhecimento
  }
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

        <section className={styles.section_info}>
          <h2>Áreas de Atuação</h2>

          <p>
            Dentro da GDP, integrantes se juntam em grupos (entre 8 a 12
            pessoas) para poder trabalhar num projeto de jogo e cada integrante
            assume um cargo dentro da equipe para tornar o jogo uma realidade.
          </p>

          <ul className={styles.areas}>
            {areaCards.map((card) => (
              <li key={card.name}>
                
                <img src={card.image} alt={`Área de atuação: ${card.name}`} />
                <div className={styles.area_card}>
                  <h2 className={card.color}>{card.name}</h2>
                  <p>{card.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section_info}>
          <h2>Gestões e Setores</h2>

          <p>
            Para manter o funcionamento da GDP, nossa estrutura possui 2 gestões
            principais que se encarregam da maior parte da administração interna
            e 2 setores para auxiliar nas demais funções e atividades externas.
          </p>

          <ul className={styles.management_section}>
            {managementCard.map((card) => (
              <li key={card.name} className={styles.management_card}>
                <img src={card.image} alt={`Logo ${card.name}`} />
                <div className={styles.management_info}>
                  <h2>{card.name}</h2>
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
