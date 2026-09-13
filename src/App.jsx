import Fotter from "./components/Fotter/Fotter";
import Header from "./components/Header/Header";
import styles from "./App.module.css";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Home />
      <Fotter />
    </div>
  );
}

export default App;
