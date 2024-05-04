import React from "react";
import { Form, Input, Button, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles
import { ToastContainer } from "react-toastify";
import AppString from "../../config/AppString";
import AppRoutes from "../../routes/AppRoutes";
import { Password, Token, UserName } from "../../config/Constants";
const { Title } = Typography;

const LoginPage = () => {
  const onFinish = async (values) => {
    const { username, password } = values;
    if (username === UserName && password === Password) {
      localStorage.setItem(AppString.Token, Token);
      toast.success("Đăng nhập thành công");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      window.location.href = AppRoutes.BASE;
    } else {
      console.log("Login fail");
      toast.error("Đăng nhập thất bại");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", marginTop: "50px" }}>
      <ToastContainer className={"toast-container"} id="toast-container" />{" "}
      {/* Add the ToastContainer component at the top-level */}
      <Title level={3} style={{ textAlign: "center", color: "#1E7B5F" }}>
        Đăng nhập
      </Title>
      <Form name="login" onFinish={onFinish} initialValues={{ remember: true }}>
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
            style={{ width: "100%", backgroundColor: "#1E7B5F" }}
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
