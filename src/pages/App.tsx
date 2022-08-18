import React, { useState } from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import Cronometro from '../cronometro';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss'


function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecioanTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa=>({
      ...tarefa, 
      selecionado: tarefa.id === tarefaSelecionada.id? true : false
    })))
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        selecionaTarefa={selecioanTarefa}
        tarefas={tarefas}
      />
      <Cronometro selecionado={selecionado}/>
    </div>
  );
}

export default App;
