import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        src="src\assets\GDP_logo.svg"
        width={138}
        height={138}
        style={{ fill: "#ffffff" }}
        alt="Logo GDP"
      />
      <ul className={styles.buttons_container}>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Projetos</a>
        </li>
        <li>
          <a>Laje</a>
        </li>
        <li>
          <a>Estúdios</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
