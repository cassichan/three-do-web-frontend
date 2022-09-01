import { Input } from "antd";
import { useState } from "react";
const { Search } = Input;

export default function AddTask({ setTaskList, token }) {
  const [task, setTask] = useState(" ");
  const addTask = () => {
    fetch("http://localhost:5001/three-do-api-cc/us-central1/api/tasks", {
    // fetch("https://three-do-api-cc.web.app/tasks", {
    method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
      body: JSON.stringify({ task, done: false })
    })
      .then((results) => results.json())
      .then((data) => {
        setTaskList(data);
        setTask("")
      })
      .catch(console.error);
  };
  return (
    <div className="add-task">
      <Search value={task} onChange={e => setTask(e.target.value)} enterButton="Add" size="large" onSearch={addTask} />
    </div>
  );
}
