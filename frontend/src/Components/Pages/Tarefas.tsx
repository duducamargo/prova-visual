import { useEffect, useState } from "react";
import { Tarefa } from "../../models/Tarefa";
import axios from "axios";
import styles from "./Tarefas.module.css";
import { Link } from "react-router-dom";

function Tarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    axios
      .get<Tarefa[]>("http://localhost:5000/api/tarefas/listar")
      .then((resposta) => {
        setTarefas(resposta.data);
      });
  }, []);

  function alterarStatus(id: any) {
    axios
      .put("http://localhost:5000/api/tarefas/alterar/" + id)
      .then((response) => {
        console.log("Tarefa atualizada com sucesso:", response.data);
        window.location.reload(); // Recarrega a página para atualizar a lista
      })
      .catch((error) => {
        console.error("Erro ao atualizar a tarefa:", error);
      });
  }

  return (
    <div id="cadastrar_produto" className="container">
      <ul>
            <li>
              <Link to="/tarefas/finalizadas">Tarefas Finalizadas</Link>
            </li>
            <li>
              <Link to="/tarefas/naofinalizadas">Tarefas Não Finalizadas</Link>
            </li>
          </ul>

      <h1>Tarefas</h1>
      <div>
        {tarefas.map((tarefa) => (
          <div className={styles.tarefas} key={tarefa.tarefaId}>
            <p>{tarefa.titulo}</p>
            <p>{tarefa.descricao}</p>
            <div>
              <p>{tarefa.status}</p>
              <button onClick={() => {
                alterarStatus(tarefa.tarefaId)
              }}>Alterar o Status</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tarefas;
