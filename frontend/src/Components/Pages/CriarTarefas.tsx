import { useEffect, useState } from "react";
import { Categoria } from "../../models/Categoria";
import { Tarefa } from "../../models/Tarefa";
import axios from "axios";


function CriarTarefas() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoriaId, setCategoriaId] = useState(0);

  useEffect(() => {
    axios
      .get<Categoria[]>("http://localhost:5000/api/categoria/listar")
      .then((resposta) => {
        setCategorias(resposta.data);
      });
  });

  function enviarProduto(e: any) {
    e.preventDefault();

    const tarefa: Tarefa = {
      titulo: nome,
      descricao: descricao,
      categoriaId: categoriaId,
    };

    axios
      .post("http://localhost:5000/api/tarefas/cadastrar", tarefa)
      .then((response) => {
        console.log("Tarefa cadastrada com sucesso!", response);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Erro ao cadastrar:", error);
      });
  }

  return (
    <div id="cadastrar_produto" className="container">
      <h1>Cadastrar Tarefa</h1>
      <form onSubmit={enviarProduto}>
        <div>
          <label htmlFor="nome">Titulo</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            onChange={(e: any) => setNome(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            id="descricao"
            name="descricao"
            onChange={(e: any) => setDescricao(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="categoria">Categoria</label>
          <select onChange={(e: any) => {
            setCategoriaId(e.target.value)
            console.log(categoriaId)
          }}>
            {categorias.map((categoria) => (
              <option value={categoria.categoriaId} key={categoria.categoriaId}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Cadastrar Tarefa</button>
      </form>
    </div>
  );
}

export default CriarTarefas;
