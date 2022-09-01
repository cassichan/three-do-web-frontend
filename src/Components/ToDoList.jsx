import { useEffect, useState } from "react";
import { List, Alert } from "antd";
import ToDoListCard from "./ToDoListCard";

export default function ToDoList({ taskList, setTaskList }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    // fetch('https://three-do-api-bc.web.app/tasks')
    //using BC api until update permissions for mine
    fetch("http://localhost:5000/tasks")
      .then((results) => results.json())
      // .then(setTaskList) //tasks => setTaskList(tasks)
      .then((tasks) => {
        setTaskList(tasks);
        setLoading(false);
        setError("");
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [setTaskList, setLoading, setError]);


  return (
    <>
      {error && (
        <Alert message="Error" description={error} type="error" showIcon />
      )}
      <div className="task-list">
        <List
          dataSource={taskList}
          loading={loading}
          renderItem={(item) => (
            <ToDoListCard key={item.id} item={item} setError={setError} setTaskList={setTaskList} setLoading={setLoading}/>
          )}
          />
      </div>
    </>
  );
}
