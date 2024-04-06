import React from "react";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import LoginImage from "../assets/images/login-image.png";
import { useNavigate } from "react-router-dom";

const onFinish = (values) => {
  const { username, password } = values;

  if (username == "admin" && password === "admin") {
    return true;
  }
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  const colLayoutStyle = {
    height: "100vh",
  };

  const layoutStyle = {
    display: "block",
    height: "100%",
    width: "100%",
    objectFit: "cover",
  };

  const flexLayout = {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
    height: "100vh",
  };

  const titleLayout = {
    justifySelf: "flex-start",
  };

  const titleFontWeightStyle = {
    fontWeight: "700",
  };

  const navigate = useNavigate();

  const { Title, Paragraph } = Typography;
  return (
    <Row align="center" justify="center">
      <Col span={12} style={colLayoutStyle}>
        <img src={LoginImage} alt="" style={layoutStyle} />
      </Col>
      <Col span={12} style={flexLayout}>
        <div style={titleLayout}>
          <Title level={2} style={titleFontWeightStyle}>
            Login
          </Title>
          <Paragraph>Sign in with your username and password.</Paragraph>
        </div>

        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={(values) => {
            const isValid = onFinish(values);
            if (isValid) {
              navigate('/account-overview')
            }
          }}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
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
            <Input />
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
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" className="">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
export default Login;
