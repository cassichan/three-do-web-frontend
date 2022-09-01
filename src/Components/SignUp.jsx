import { Modal, Form, Input, Button } from "antd";

export default function SignUp({ setToken, setIsUser }) {
  const handleSignup = ({ email, password }) => {
    //destructured from values from antd form

    //post request to api/users
    // fetch('http://localhost:5001/users', {
    fetch("http://localhost:5001/three-do-api-cc/us-central1/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setToken(data.token);
        localStorage.setItem("token", data.token);
      })
      .catch((err) => alert(err.message));
    //setToken
  };

  return (
    <Modal title="Create Account" visible closable={false} footer={null}>
      <Form
        onFinish={handleSignup}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item label="Email" name="email">
          {/* Recommended to add rules */}
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          {/* Recommended to add rules */}
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Sign up
          </Button>
        </Form.Item>
        <p>
          Already a user?{" "}
          <Button onClick={() => setIsUser(true)} type={"link"}>
            Login
          </Button>
        </p>
      </Form>
    </Modal>
  );
}
