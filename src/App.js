import { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import ToDoList from "./Components/ToDoList";
import AddTask from "./Components/AddTask";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login"
import "./App.css";

const { Header, Content, Footer } = Layout;

function App() {
  const [taskList, setTaskList] = useState();
  const [token, setToken] = useState();
  const [isUser, setIsUser] = useState(false)
  useEffect(() => {
    if(localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
    }
  }, [setToken])


  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Three-Do</Menu.Item>
          <Menu.Item key="2">Login</Menu.Item>
          <Menu.Item key="3">Sign Up</Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div className="site-layout-content">
          <h1>Three-do</h1>
          <ToDoList token={token} taskList={taskList} setTaskList={setTaskList} />
          <AddTask token={token} setTaskList={setTaskList} />
          {!token ?
            isUser ? <Login setIsUser = {setIsUser} setToken={setToken} /> :
          <SignUp setIsUser = {setIsUser} setToken={setToken}/> : null }
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Three-Do ©2022 Created by Cassandra Curcio
      </Footer>
    </Layout>
  );
}

export default App;
