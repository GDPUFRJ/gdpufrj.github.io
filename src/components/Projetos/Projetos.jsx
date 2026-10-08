import { useState } from "react";
import GamesList from "../GamesList/GamesList";
import styles from "./Projetos.module.css";

const Projetos = ({ games }) => {
  const [category, setCategory] = useState("Todos");
  const [explication, setExplication] = useState("");

  function selectCategory(newCategory) {
    setCategory(newCategory);
    switch(newCategory){
      case "Todos":
        setExplication("");
        break;
      case "Internos":
        setExplication("Projetos comuns desenvolvidos pelos integrantes da GDP. Integrantes se juntam em uma equipe de 8 a 12 pessoas para desenvolver um jogo dentro de 1 ano.");
        break;
      case "Periódicos":
        setExplication("Projetos desenvolvidos pelos integrantes da GDP durante um período letivo da UFRJ. As equipes são separadas e organizadas pela Gestão de Projetos para que possam desenvolver um jogo dentro de 4 a 5 meses.");
        break;
      case "Jams":
        setExplication("Projeito desenvolvidos pelos integrantes da GDP durante Game Jams que são pequenas maratonas de desenvolvimento de jogos.");
        break;
      case "Especiais":
        setExplication("Projetos que fogem do padrão do desenvolvimento da GDP, alguns seguindo mídias diferentes de jogos digitais.");
        break;
      case "Externos":
        setExplication("Projetos realizados em conjunto com outros grupos e/ou instituições.");
        break;
      case "Eventos":
        setExplication("Projetos desenvolvidos por participantes dos eventos organizados pela GDP.Os jogos feitos na LAJE estão presentes exclusivamente na página LAJE do site.");
        break;
      case "PS":
        setExplication("Projetos desenvolvidos pelos participantes dos nossos Processos Seletivos para ingressar na GDP.");
        break;
    }
    setCurrentPage(1);
  }

  return (
    <main className={styles.home}>
      <section className={styles.content}>
        <div className={styles.intro}>
          <h1>Projetos</h1>

          <p>
            Todos os projetos da GDP estão hospedados no Itch.io e os
            organizamos aqui em categorias para facilitar a busca. Algumas
            categorias também são compostas por jogos feitos por pessoas de fora
            da GDP, no caso de participantes de eventos e processos seletivos.
          </p>
        </div>

        <section className={styles.projects_section}>
          <div className={styles.category_selection}>
            <button className={category === "Todos" ? styles.activeCategory : ""} onClick={() => selectCategory("Todos")}>Todos</button>

            <button className={category === "Internos" ? styles.activeCategory : ""} onClick={() => selectCategory("Internos")}>Internos</button>

            <button className={category === "Periódicos" ? styles.activeCategory : ""} onClick={() => selectCategory("Periódicos")}>
              Periódicos
            </button>

            <button className={category === "Jams" ? styles.activeCategory : ""} onClick={() => selectCategory("Jams")}>Jams</button>

            <button className={category === "Especiais" ? styles.activeCategory : ""} onClick={() => selectCategory("Especiais")}>
              Especiais
            </button>

            <button className={category === "Externos" ? styles.activeCategory : ""} onClick={() => selectCategory("Externos")}>Externos</button>

            <button className={category === "Eventos" ? styles.activeCategory : ""} onClick={() => selectCategory("Eventos")}>
              Eventos da GDP
            </button>

            <button className={category === "PS" ? styles.activeCategory : ""} onClick={() => selectCategory("PS")}>
              Processos Seletivos
            </button>
          </div>

          <p className={styles.explication}>
            {explication}
          </p>

          <GamesList
            games={games}
            category={category}
          />
        </section>
      </section>
    </main>
  );
};

export default Projetos;
