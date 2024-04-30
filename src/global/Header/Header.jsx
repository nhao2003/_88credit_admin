import React from "react";
import { Space, Button, Typography } from "antd";
import style from "./Header.module.css";
import { LogoutOutlined } from "@ant-design/icons";
import logo from "../../../assets/logo.png";
function Header() {
  const handleLogout = () => {
    // Thực hiện các bước đăng xuất ở đây
    // Ví dụ: Xóa token từ localStorage và chuyển hướng đến trang đăng nhập
    sessionStorage.removeItem("token");
    window.location.href = "/"; // Điều hướng đến trang đăng nhập
  };

  return (
    <div className={style.AppHeader}>
      <Typography.Text>Admin</Typography.Text>
      <img
        src={logo}
        alt=""
        style={{
          height: "40px",
          paddingTop: "8px",
          paddingBottom: "8px",
          paddingLeft: "32px",
        }}
      />
      <Space>
        {/* Log out icon */}
        <Button type="link" onClick={handleLogout} style={{ color: "#026D4D" }}>
          Đăng Xuất <LogoutOutlined />
        </Button>
      </Space>
    </div>
  );
}

export default Header;
