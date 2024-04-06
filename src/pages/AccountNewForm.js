import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useAccountCreationMutation } from "../query/useAccountQuery";
import { useNavigate } from "react-router-dom";

const AccountNewForm = () => {
  const [formLayout, setFormLayout] = useState("vertical");

  const navigate = useNavigate();

  const { mutate, isLoading } = useAccountCreationMutation({
    onSuccess: () => {
      navigate("/account-overview");
    },
  });

  const onFinish = (values) => {
    mutate(values);
  };

  return (
    <Form
      name="basic"
      layout={formLayout}
      initialValues={{
        layout: formLayout,
      }}
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 24,
      }}
      style={{
        maxWidth: "100%",
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please enter your account name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Access Key"
        name="access_key"
        rules={[
          {
            required: true,
            message: "Please enter your Access key",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Secret Key"
        name="secret_key"
        rules={[
          {
            required: true,
            message: "Please enter your secret key",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Session Token"
        name="session_key"
        rules={[
          {
            required: true,
            message: "Please enter your session token",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Region"
        name="region"
        rules={[
          {
            required: true,
            message: "Please enter your region",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item style={{ marginTop: "12px" }}>
        <Button type="primary" htmlType="submit" className="" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AccountNewForm;
