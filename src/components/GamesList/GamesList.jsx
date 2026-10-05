import styles from "./GamesList.module.css";

function checkCategory(collection_name, category){
    switch(category) {
    case "Todos":
        return collection_name != "Laje";
    case "Internos":
        return collection_name == "Projetos Internos";
    case "Periódicos":
        return collection_name == "Projetos Peridicos Pp";
    case "Jams":
        return collection_name == "Game Jams";
    case "Especiais":
        return collection_name == "Projetos Especiais";
    case "Externos":
        return collection_name == "Projetos Externos";
    case "Eventos":
        return collection_name == "Eventos Da Gdp";
    case "PS":
        return collection_name == "Processos Seletivos Ps";
    case "LAJE":
        return collection_name == "Laje";
    }
}

const GamesList = ({games, category}) => {
    return (
        <section className={styles.content}>
            {/* <div>
                Barra de Pesquisa e Sort
            </div> */}
            <ul className={styles.gameslist}>
                {games.map((item) => (
                
                <li key={item.url}>
                    <a
                        href={item.url}
                        aria-label={`${item.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={item.cover_url} alt={`Capa ${item.title}`} />
                    </a>
                    <h2>{item.title}</h2>
                </li>
                ))}
            </ul>
        </section>
    );
};

export default GamesList;