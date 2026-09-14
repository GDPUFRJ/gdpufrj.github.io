import styles from "./Header.module.css";
import gdpLogo from "../../assets/GDP_logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={gdpLogo} width={138} height={138} alt="Logo GDP" />
      <ul className={styles.buttons_container}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Projetos</a>
        </li>
        <li>
          <a href="#">Laje</a>
        </li>
        <li>
          <a href="#">Estúdios</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
