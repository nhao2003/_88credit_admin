import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  FormOutlined,
  UserOutlined,
  WarningOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Button, Menu } from "antd";
import style from "./SideBar.module.css";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Dashboard", "", <PieChartOutlined />),
  getItem("Bài đăng", "post", <FormOutlined />, [
    getItem("DS Bài đăng chờ duyệt", "pending_post"),
    getItem("DS Bài đăng đã duyệt", "approved_post"),
    getItem("DS Bài đăng đã từ chối", "rejected_post"),
  ]),

  getItem("Quản lý tố cáo", "sub2", <WarningOutlined />, [
    getItem("Tố cáo bài đăng", "post_reporting"),
    getItem("Tố cáo người dùng", "user_reporting"),
    //getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),

  getItem("Quản lý người dùng", "sub3", <UserOutlined />, [
    getItem("Tất cả", "user"),
    //getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),

  getItem("Blog", "blogs", <ReadOutlined />),
  // getItem('Mẫu hợp đồng', 'contract_template', <ReadOutlined />),
];
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const location = useLocation();
  // const [selectedKeys, setSelectedKeys] = useState("/");

  // useEffect(() => {
  //   const pathName = location.pathname;
  //   setSelectedKeys(pathName);
  // }, [location.pathname]);

  const navigate = useNavigate();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className={style.SideMenu}>
      <Menu
        defaultOpenKeys={["post"]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
      />
      <Button
        type="primary"
        onClick={toggleCollapsed}
        className={style.ToggleButton}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </div>
  );
};
export default SideBar;
