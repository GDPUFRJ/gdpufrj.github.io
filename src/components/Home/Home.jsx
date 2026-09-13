import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <img src="src\assets\GDP_logo.svg" alt="GDP Logo" width={500} />
        <div className={styles.text_container}>
          <h1>GDP UFRJ: Grupo de Desenvolvimento de Jogos Eletrônicos</h1>
          <p>
            Fundada em 2007, a GDP passou por diversas mudanças ao longo dos
            anos, mas nunca deixou sua paixão de criar de lado.
          </p>
          <p>
            (Melhor explicar um pouco mais formal/profissional oq somos
            primeiro)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
