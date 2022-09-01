import { List, Switch } from "antd";

export default function ToDoListCard({
  item,
  setError,
  setTaskList,
  setLoading,
}) {
  const handleSwitch = () => {
    //Make a patch to api
    setLoading(true);
    const body = { done: !item.done };
    fetch(`http://localhost:5000/tasks/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
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
        avatar={
          <Switch
            onChange={() => {
              handleSwitch();
            }}
            checked={item.done}
          />
        }
        title={<p>{item.task}</p>}
      />
    </List.Item>
  );
}
