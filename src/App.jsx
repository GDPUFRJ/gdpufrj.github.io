import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Laje from "./components/Laje/Laje";
import Home from "./components/Home/Home";
import Estudios from "./components/Estudios/Estudios";
import Projetos from "./components/Projetos/Projetos";

import styles from "./App.module.css";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function buscarDados() {
      try {
        const resposta = await fetch("/games.json");

        if (!resposta.ok) {
          throw new Error(`Erro ao carregar games.json: ${resposta.status}`);
        }

        const resultadoJson = await resposta.json();

        setGames(resultadoJson.games);
      } catch (err) {
        console.error("Erro ao buscar games.json:", err);
      }
    }

    buscarDados();
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
