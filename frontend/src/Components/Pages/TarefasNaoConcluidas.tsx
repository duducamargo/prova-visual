import { useEffect, useState } from "react";
import { Tarefa } from "../../models/Tarefa";
import axios from "axios";
import styles from "./Tarefas.module.css";

function TarefasNaoConcluidas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  let tarefasNaoFinalizadas : Tarefa[] = [];

  useEffect(() => {
    axios
      .get<Tarefa[]>("http://localhost:5000/api/tarefas/listar")
      .then((resposta) => {
        setTarefas(resposta.data);
        tarefasNaoFinalizadas = resposta.data
      });

  }, []);

  let tarefasNaoConcluidasF : Tarefa[] = []

   tarefasNaoFinalizadas.forEach((tarefa) => {
    if(tarefa.status === "Não Finalizada") {
        tarefasNaoConcluidasF.push()
    }
  })



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
      <h1>Tarefas Não Concluidas</h1>
      <div>
        {tarefasNaoConcluidasF.map((tarefa : any) => (
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

export default TarefasNaoConcluidas;
