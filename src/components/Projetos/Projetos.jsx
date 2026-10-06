import { useState } from "react";
import GamesList from "../GamesList/GamesList";
import styles from "./Projetos.module.css";

const Projetos = ({ games }) => {
  const [category, setCategory] = useState("Todos");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  function selectCategory(newCategory) {
    setCategory(newCategory);
    setCurrentPage(1);
  }

  function handleSearch(event) {
    setSearch(event.target.value);
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

          <p className={styles.explication}>
            Explicação sobre a categoria selecionada exceto Geral/Todos
          </p>

          <div className={styles.search_container}>
            <input
              type="text"
              placeholder="Pesquisa..."
              value={search}
              onChange={handleSearch}
              className={styles.search_input}
            />
          </div>

          <GamesList
            games={games}
            category={category}
            search={search}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </section>
      </section>
    </main>
  );
};

export default Projetos;
