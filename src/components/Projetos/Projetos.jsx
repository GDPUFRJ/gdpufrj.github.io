import { useState } from "react";
import GamesList from "../GamesList/GamesList";
import styles from "./Projetos.module.css";

const Projetos = ({ games }) => {
  const [category, setCategory] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);

  function selectCategory(newCategory) {
    setCategory(newCategory);
    setCurrentPage(1);
  }

  return (
    <main className={styles.home}>
      <section className={styles.content}>
        <div className={styles.intro}>
          <h1>Projetos</h1>
        </div>

        <section className={styles.projects_section}>
          <div className={styles.category_selection}>
            <button onClick={() => selectCategory("Todos")}>Todos</button>

            <button onClick={() => selectCategory("Internos")}>Internos</button>

            <button onClick={() => selectCategory("Periódicos")}>
              Periódicos
            </button>

            <button onClick={() => selectCategory("Jams")}>Jams</button>

            <button onClick={() => selectCategory("Especiais")}>
              Especiais
            </button>

            <button onClick={() => selectCategory("Externos")}>Externos</button>

            <button onClick={() => selectCategory("Eventos")}>
              Eventos da GDP
            </button>

            <button onClick={() => selectCategory("PS")}>
              Processos Seletivos
            </button>
          </div>

          <GamesList
            games={games}
            category={category}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </section>
      </section>
    </main>
  );
};

export default Projetos;
