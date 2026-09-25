import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from "./App.module.css";
import Home from "./components/Home/Home";
import Estudios from "./components/Estudios/Estudios";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Estudios />
      <Footer />
    </div>
  );
}

export default App;
