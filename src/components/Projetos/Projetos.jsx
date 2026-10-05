import GamesList from "../GamesList/GamesList";
import styles from "./Projetos.module.css";

var category = "Todos";

function selectCategory(newCategory){
  category = newCategory;
  console.log(category)
}

const Projetos = ({games}) => {
  return (
      <main className={styles.home}>
        <section className={styles.content}>
          <div className={styles.intro}>
            <h1>Projetos</h1>
            <p>
              Todos os projetos da GDP estão hospedados no <a href="https://gdpufrj.itch.io/" target="_blank">Itch.io</a> e o organizamos aqui em categorias para facilitar a busca.
              Algumas categorias também são compostas por jogos feitos por pessoas de fora da GDP, no caso de participantes de eventos e processos seletivos. 
            </p>
  
          </div>
  
          <section className={styles.projects_section}>
            <div className={styles.category_selection}>
              <button onClick={selectCategory("Todos")}>Todos</button>
              <button onClick={selectCategory("Internos")}>Internos</button>
              <button onClick={selectCategory("Periódicos")}>Periódicos</button>
              <button onClick={selectCategory("Jams")}>Jams</button>
              <button onClick={selectCategory("Especiais")}>Especiais</button>
              <button onClick={selectCategory("Externos")}>Externos</button>
              <button onClick={selectCategory("Eventos")}>Eventos da GDP</button>
              <button onClick={selectCategory("PS")}>Processos Seletivos</button>
            </div>
            
            <GamesList games={games} category={category}/>
            
          </section>
        </section>
      </main>
    );
};

export default Projetos;
