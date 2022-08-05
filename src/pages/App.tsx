import React, { useState } from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import Cronometro from '../cronometro';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss'


function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
