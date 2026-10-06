import styles from "./GamesList.module.css";

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

    case "LAJE":
      return collection_name === "Laje";

    default:
      return true;
  }
}

const GamesList = ({ games, category, currentPage, setCurrentPage }) => {
  const gamesPerPage = 9;

  const filteredGames = games.filter((item) =>
    checkCategory(item.collection_name, category),
  );

  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);

  const startIndex = (currentPage - 1) * gamesPerPage;

  const currentGames = filteredGames.slice(
    startIndex,
    startIndex + gamesPerPage,
  );

  return (
    <section className={styles.content}>
      <ul className={styles.gameslist}>
        {currentGames.map((item) => (
          <li key={item.url}>
            <a href={item.url} aria-label={item.title} target="_blank">
              <img src={item.cover_url} alt={`Capa ${item.title}`} />
            </a>

            <h2>{item.title}</h2>
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
            disabled={currentPage === 1}
          >
            Anterior
          </button>

          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? styles.activePage : ""}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() =>
              setCurrentPage((page) => Math.min(page + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Próxima
          </button>
        </div>
      )}
    </section>
  );
};

export default GamesList;
