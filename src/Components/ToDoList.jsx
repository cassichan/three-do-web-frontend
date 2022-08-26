import { useEffect } from "react";

export default function ToDoList({ taskList, setTaskList }) {
  useEffect(() => {
    fetch('https://three-do-api-bc.web.app/tasks')  
    //using BC api until update permissions for mine
    .then(results => results.json()) 
    .then(setTaskList) //tasks => setTaskList(tasks)
    .catch(console.error)
  }, [setTaskList])
  if (!taskList) {
    return <h2>No tasks to complete</h2>;
  }
  return (
    <ul>
      {taskList.map(task => (
        <li key={task.id}>{task.task}</li>
      ))}
    </ul>
  );
}
