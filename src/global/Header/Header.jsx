import React from "react";
import { Row, Space, Button, Badge, Avatar, Divider } from "antd";
import { LogoutOutlined, UserOutlined, BellOutlined } from "@ant-design/icons";
import logo from "../../../assets/icons/logo.png";
import style from "./Header.module.css";
import AppColors from "../../config/AppColors";
import AppString from "../../config/AppString";
import { AuthRepo } from "../../repository/AuthRepo";
import { ToastContainer } from "react-toastify";

function Header() {
  return (
    <>
      <ToastContainer className={"toast-container"} id="toast-container" />{" "}
      <div className={style.AppHeader}>
        <Space>
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
          <p
            style={{
              fontSize: "24px",
              margin: "5px",
              fontFamily: "Bebas Neue",
              color: AppColors.primary,
            }}
          >
            {AppString.AppName}
          </p>
        </Space>
        <Space>
          <Badge count={3} dot>
            <BellOutlined style={{ fontSize: 24 }} />
          </Badge>
          <Divider type="vertical" style={{ width: 3, height: 30 }} />
          <Avatar
            size={36}
            icon={<UserOutlined />}
            style={{ backgroundColor: AppColors.primary }}
          />
          <Row>{AppString.UserName}</Row>
          <Divider type="vertical" style={{ width: 3, height: 30 }} />
          <Button
            type="link"
            onClick={AuthRepo.onLogout}
            style={{ color: AppColors.primary, paddingLeft: 0 }}
          >
            Đăng Xuất
            <LogoutOutlined />
          </Button>
          {/* <CaretDownOutlined /> */}
        </Space>
      </div>
    </>
  );
}

export default Header;
