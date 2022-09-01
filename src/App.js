import { useState } from "react";
import { Layout, Menu } from "antd";
import ToDoList from "./Components/ToDoList";
import AddTask from "./Components/AddTask";
import SignUp from "./Components/SignUp";
import "./App.css";

const { Header, Content, Footer } = Layout;

function App() {
  const [taskList, setTaskList] = useState();
  const [token, setToken] = useState();
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
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
          <ToDoList taskList={taskList} setTaskList={setTaskList} />
          <AddTask setTaskList={setTaskList} />
          {!token && <SignUp setToken={setToken}/>}
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

    // <>
    //   <h1>Three-do</h1>
    //   <ToDoList taskList={taskList} setTaskList={setTaskList} />
    //   <AddTask setTaskList={setTaskList} />
    // </>
  );
}

export default App;
