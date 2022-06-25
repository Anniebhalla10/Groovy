import React, { useState } from "react";
import { Form, Input, Checkbox, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const defaultCredential = {
    username: "",
    password: "",
  };
  const [credential, setCredential] = useState({ ...defaultCredential });

  const submitHandler = () => {
    if (
      credential.username === "annie" ||
      credential.username === "harsh" ||
      credential.password === "groovy1234"
    ) {
      navigate("/home", { replace: true });
    } else {
      message.error("Wrong credentials");
    }
  };

  return (
    <>
    <div className="login-page">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        //   onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="login_form"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            onChange={(e) =>
              setCredential({ ...credential, username: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            onChange={(e) =>
              setCredential({ ...credential, password: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={submitHandler}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
    </>
  );
};

export default Login;
