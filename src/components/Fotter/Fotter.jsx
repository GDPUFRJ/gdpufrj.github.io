import styles from "./Fotter.module.css";

const Fotter = () => {
  return (
    <div className={styles.fotter}>
      <div className={styles.social_media_container}>
        <h2>Redes Sociais</h2>
        <ul>
          <li>
            <img
              src="src\assets\itchio.svg"
              alt="Itchio Logo"
              width={60}
              height={60}
              color="#ffffff"
            />
          </li>
          <li>
            <img
              src="src\assets\instagram.svg"
              alt="Instagram Logo"
              width={60}
              height={60}
            />
          </li>
          <li>
            <img
              src="src\assets\twitter-x.svg"
              alt="Twitter-X Logo"
              width={60}
              height={60}
            />
          </li>
          <li>
            <img
              src="src\assets\bluesky.svg"
              alt="Bluesky Logo"
              width={60}
              height={60}
            />
          </li>
        </ul>
      </div>
      <div className={styles.contato_container}>
        <h2>Contato</h2>
        <p>gdp.ufrj@gmail.com</p>
      </div>
      <div className={styles.filiado_container}>
        <h3>Filiado à</h3>
        <img src="src\assets\acjogos.svg" alt="Acjogos Logo" />
      </div>
    </div>
  );
};

export default Fotter;
