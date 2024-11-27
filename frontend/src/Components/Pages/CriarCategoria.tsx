import { useEffect, useState } from "react";
import { Categoria } from "../../models/Categoria";
import { Tarefa } from "../../models/Tarefa";
import axios from "axios";


function CriarCategoria() {
  const [nome, setNome] = useState("");

  function enviarCategoria(e: any) {
    e.preventDefault();

    const categoria: Categoria = {
      nome: nome,
    };

    axios
      .post("http://localhost:5000/api/categoria/cadastrar", categoria)
      .then((response) => {
        console.log("Categoria cadastrada com sucesso!", response);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Erro ao cadastrar:", error);
      });
  }

  return (
    <div id="cadastrar_produto" className="container">
      <h1>Cadastrar Categoria</h1>
      <form onSubmit={enviarCategoria}>
        <div>
          <label htmlFor="nome">Nome da Categoria</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            onChange={(e: any) => setNome(e.target.value)}
          />
        </div>

        <button type="submit">Cadastrar Categoria</button>
      </form>
    </div>
  );
}

export default CriarCategoria;
