import { useState } from 'react';
import ToDoList from './Components/ToDoList';

import './App.css';

function App() {
  const [taskList, setTaskList] = useState()
  return (
    <>
    <h1>Three-do</h1>
    <ToDoList taskList={taskList} setTaskList={setTaskList}/>
    </>
  );
}

export default App;
