import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from "./App.module.css";
import Laje from "./components/Laje/Laje";
import Home from "./components/Home/Home";
import Estudios from "./components/Estudios/Estudios";
import Projetos from "./components/Projetos/Projetos";
import { useEffect, useState } from "react";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("../public/games.json")
      .then((res) => res.json())
      .then((dados) => {
        setGames(dados.games);
      })
      .catch((erro) => {
        console.error("Erro ao carregar JSON:", erro);
      });
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos games={games} />} />
        <Route path="/laje" element={<Laje games={games} />} />
        <Route path="/estudios" element={<Estudios />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
