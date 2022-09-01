import { useEffect, useState } from "react";
import { List, Alert } from "antd";
import ToDoListCard from "./ToDoListCard";

export default function ToDoList({ taskList, setTaskList, token }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    // fetch("http://localhost:5001/tasks")
    fetch("http://localhost:5001/three-do-api-cc/us-central1/api/tasks", {
      headers: {
        "Authorization": token,
      }
    })
      .then((results) => results.json())
      .then((tasks) => {
        setTaskList(tasks);
        setLoading(false);
        setError("");
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [token, setTaskList, setLoading, setError]);


  return (
    <>
      {(error && token) &&
        <Alert message="Error" description={error} type="error" showIcon />
      }
      <div className="task-list">
        <List
          dataSource={taskList}
          loading={loading}
          renderItem={(item) => (
            <ToDoListCard key={item.id} token={token} item={item} setError={setError} setTaskList={setTaskList} setLoading={setLoading}/>
          )}
          />
      </div>
    </>
  );
}
