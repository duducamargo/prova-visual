import React from "react";
import Tarefas from "./Components/Pages/Tarefas";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CriarTarefas from "./Components/Pages/CriarTarefas";
import CriarCategoria from "./Components/Pages/CriarCategoria";
import TarefasConcluidas from "./Components/Pages/TarefasConcluidas";
import TarefasNaoConcluidas from "./Components/Pages/TarefasNaoConcluidas";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pages/tarefa/cadastrar">Criar Tarefa</Link>
            </li>
            <li>
              <Link to="/pages/categoria/cadastrar">Criar Categoria</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Tarefas />} />
          <Route path="/tarefas/finalizadas" element={<TarefasConcluidas />} />
          <Route path="/tarefas/naofinalizadas" element={<TarefasNaoConcluidas />} />
          <Route path="/pages/tarefa/cadastrar" element={<CriarTarefas />} />
          <Route path="/pages/categoria/cadastrar" element={<CriarCategoria />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
