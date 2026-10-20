import { useState } from "react";
import styles from "./GamesList.module.css";
import capaDefault from "../../assets/capa_default.png";

function checkCategory(collection_name, category) {
  switch (category) {
    case "Todos":
      return collection_name !== "Laje";

    case "Internos":
      return collection_name === "Projetos Internos";

    case "Periódicos":
      return collection_name === "Projetos Peridicos Pp";

    case "Jams":
      return collection_name === "Game Jams";

    case "Especiais":
      return collection_name === "Projetos Especiais";

    case "Externos":
      return collection_name === "Projetos Externos";

    case "Eventos":
      return collection_name === "Eventos Da Gdp";

    case "PS":
      return collection_name === "Processos Seletivos Ps";

    case "Laje":
      return collection_name === "Laje";

    default:
      return true;
  }
}

const GamesList = ({
  games,
  category
}) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  function handleSearch(event) {
    setSearch(event.target.value);
    setCurrentPage(1);
  }

  const gamesPerPage = 9;

  const filteredGames = games.filter((item) => {
    const matchesCategory = checkCategory(item.collection_name, category);

    const matchesSearch = item.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredGames.length / gamesPerPage),
  );

  const safeCurrentPage = Math.min(currentPage, totalPages);

  const startIndex = (safeCurrentPage - 1) * gamesPerPage;

  const currentGames = filteredGames.slice(
    startIndex,
    startIndex + gamesPerPage,
  );

  return (
    <div>
      <div className={styles.search_container}>
              <input
                type="text"
                placeholder="Pesquisa..."
                value={search}
                onChange={handleSearch}
                className={styles.search_input}
              />
      </div>

      <section className={styles.content}>
        {filteredGames.length > 0 ? (
          <ul className={styles.gameslist}>
            {currentGames.map((item) => (
              <li key={item.url}>
                <a href={item.url} aria-label={item.title} target="_blank">
                  <img
                    src={item.cover_url ? item.cover_url : capaDefault}
                    alt={`Capa ${item.title}`}
                  />
                </a>

                <h2>{item.title}</h2>
              </li>
            ))}
          </ul>
        ) : (
          <h2 className={styles.noResults}>Nenhum projeto encontrado.</h2>
        )}

        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
              disabled={safeCurrentPage === 1}
            >
              Anterior
            </button>

            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;

              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={safeCurrentPage === page ? styles.activePage : ""}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() =>
                setCurrentPage((page) => Math.min(page + 1, totalPages))
              }
              disabled={safeCurrentPage === totalPages}
            >
              Próxima
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default GamesList;
