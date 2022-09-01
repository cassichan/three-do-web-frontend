import { List, Switch } from "antd";

export default function ToDoListCard({
  item,
  setError,
  setTaskList,
  setLoading,
  token,
}) {
  const handleSwitch = () => {
    //Make a patch to api
    setLoading(true);
    const body = { done: !item.done };
    // fetch(`http://localhost:5001/tasks/${item.id}`, {
    fetch(`http://localhost:5001/three-do-api-cc/us-central1/api/tasks/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        setTaskList(data);
        setError("");
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <List.Item key={item.id}>
      <List.Item.Meta
        avatar={<Switch onChange={() => handleSwitch()} checked={item.done} />}
        title={<p>{item.task}</p>}
      />
    </List.Item>
  );
}
