import styles from "./Laje.module.css";
import lajeLogo from "../../assets/LAJE_logo.svg";
import GamesList from "../GamesList/GamesList";

import lajeGalera from "../../assets/fotosLaje/LAJE_galera.JPG";
import lajePalestra1 from "../../assets/fotosLaje/LAJE_palestra1.png";
import lajePalestra2 from "../../assets/fotosLaje/LAJE_palestra2.png";
import lajePalestra3 from "../../assets/fotosLaje/LAJE_palestra3.png";
import lajeGameJam1 from "../../assets/fotosLaje/LAJE_gamejam1.png";
import lajeGameJam2 from "../../assets/fotosLaje/LAJE_gamejam2.png";
import lajeGameJam3 from "../../assets/fotosLaje/LAJE_gamejam3.png";

const Laje = ({games}) => {
  return (
    <main className={styles.home}>
      <section className={styles.content}>
        <div className={styles.intro}>
          <img
            src={lajeLogo}
            alt="Logo do evento Laboratório de Aprendizado de Jogos Eletrônicos"
            className={styles.logo}
          />

          <div className={styles.text_container}>
            <h1>LAJE</h1>

            <h2>Laboratório de Aprendizado de Jogos Eletrônicos</h2>

            <p>
              Idealizado e organizado pela GDP desde 2021, a LAJE é um evento anual focado em disseminar o conhecimento e abrir oportunidade para pessoas
              que nunca tiveram contato a criação de jogos eletrônicos. Organizado em 2 etapas, o evento dissemina tanto conhecimento técnico quanto prático
              para impulsionar o primeiro jogo de diversas pessoas.
            </p>

          </div>
        </div>

        <div className={styles.passion_section}>
            <section className={styles.text_container}>
                <h2>Paixão pelo conhecimento</h2>

                <p>
                    Com o intuito de passar o conhecimento aprendido dentro da GDP, nossos integrantes buscam trazer a melhor experiência para quem nunca se aventurou
                    dentro da área, independente do seu curso de formação. 
                </p>
            </section>

            <img
            src={lajeGalera}
            alt="Integrantes da GDP em frente a Inovateca após evento de 2026"
            className={styles.logo}
            />

        </div>

        <div className={styles.etapa_section}>
            <h2>Palestras e Oficinas</h2>
            <p>
                Na primeira etapa do evento são realizadas oficinas e palestras, online e presenciais, abertas ao público e ministradas por convidados, integrantes, ex-integrantes da GDP.
                Nossas palestras ficam disponibilizadas no <a href="https://www.youtube.com/@GDPUFRJ" target="_blank">canal do Youtube da GDP</a> para que possam ser vistas mesmo após o fim do evento.
            </p>
            <div className={styles.etapa_galeria}>
                <img
                    src={lajePalestra1}
                    alt="Captura de tela da palestra 'O Essencial de Pixel Art para Jogos'"
                />
                <img
                    src={lajePalestra2}
                    alt="Captura de tela da palestra 'Prisma Game Lab apresenta: Criação de personagens'"
                />
                <img
                    src={lajePalestra3}
                    alt="Mesa redonda no palco da Inovateca na LAJE 2024"
                />
            </div>
        </div>

        <div className={styles.etapa_section}>
            <h2>Game Jam</h2>
            <p>
                Na segunda etapa são formados diversos grupos entre os participantes da LAJE. Através de um ciclo de planejamento e produção, as equipes irão desenvolver seus próprios jogos em uma Game Jam,
                uma maratona de poucos dias, e apresentar seus projetos em forma de pitch no encerramento da LAJE.
            </p>
            <div className={styles.etapa_galeria}>
                <img
                    src={lajeGameJam1}
                    alt="Captura de tela da palestra 'O Essencial de Pixel Art para Jogos'"
                />
                <img
                    src={lajeGameJam2}
                    alt="Captura de tela da palestra 'Prisma Game Lab apresenta: Criação de personagens'"
                />
                <img
                    src={lajeGameJam3}
                    alt="Mesa redonda no palco da Inovateca na LAJE 2024"
                />
            </div>
        </div>

        <div className={styles.games_section}>
            <h2>Jogos feitos na LAJE</h2>
            <GamesList games={games} category="LAJE"/>
        </div>

      </section>
    </main>
  );
};

export default Laje;