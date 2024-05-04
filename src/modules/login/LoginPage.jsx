import React from "react";
import { Form, Input, Button, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "react-toastify/dist/ReactToastify.css"; // Import the styles
import { ToastContainer } from "react-toastify";
import AppColors from "../../config/AppColors";
import { AuthRepo } from "../../repository/AuthRepo";
const { Title } = Typography;

const LoginPage = () => {
  return (
    <div style={{ maxWidth: "400px", margin: "auto", marginTop: "50px" }}>
      <ToastContainer className={"toast-container"} id="toast-container" />{" "}
      {/* Add the ToastContainer component at the top-level */}
      <Title
        level={2}
        style={{ textAlign: "center", color: AppColors.primary }}
      >
        Đăng nhập
      </Title>
      <Form
        name="login"
        onFinish={AuthRepo.onLogin}
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Vui lòng nhập tên người dùng!" }]}
        >
          <Input
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Tên người dùng"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password
            prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Mật khẩu"
          />
        </Form.Item>

        <Form.Item>
          <Button
            id="login-button"
            type="primary"
            htmlType="submit"
            style={{ width: "100%", backgroundColor: AppColors.primary }}
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
