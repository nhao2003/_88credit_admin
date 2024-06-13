import React from "react";
import {
  Tabs,
  Card,
  Row,
  Col,
  Typography,
  Button,
  Select,
  Table,
  Tag,
  Space,
} from "antd";
import Breadcrumbs from "../../../global/BreadCrumb/BreadCrumb";
import Search from "antd/es/input/Search";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLoaderData, useFetcher } from "react-router-dom";
import PostTable from "../components/Table";
import ApiService from "../../../services/ApiService";
import {
  CloseOutlined,
  DeleteOutlined,
  ExclamationCircleFilled,
  LockOutlined,
} from "@ant-design/icons";
import moment from "moment";

//function loader to call API
export async function loader() {
  const response = await ApiService.get("user");
  const users = response.data.items;
  console.log("users", users);
  if (!users) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { users };
}

function User(props) {
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const { Title } = Typography;
  const { users } = useLoaderData();

  const columns = [
    {
      title: "Tên",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Họ",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Ngày sinh",
      dataIndex: "dob",
      key: "dob",
      render: (datee) => moment(datee).format("DD/MM/YYYY"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      render: (gender) => <span>{gender ? "Nam" : "Nữ"}</span>,
      key: "gender",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (status) => (
        <span>
          {
            <Tag
              color={
                status == "verified"
                  ? "green"
                  : status == "not_update"
                  ? "purple"
                  : status == "banned"
                  ? "red"
                  : "yellow"
              }
              key={status}
            >
              {status == "verified"
                ? "Đã xác minh"
                : status == "not_update"
                ? "Chưa cập nhật"
                : status == "banned"
                ? "Đã khóa"
                : "Chờ xác mịnh"}
            </Tag>
          }
        </span>
      ),
      key: "status",
    },
    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <fetcher.Form method="patch">
            <Button
              onClick={(e) => {
                e.stopPropagation();
              }}
              type="primary"
              htmlType="submit"
              name="id"
              style={{ backgroundColor: "#FFCD29", color: "black" }}
              value={record.id}
            >
              Khóa
            </Button>
            <input type="hidden" name="type" value="ban" />
          </fetcher.Form>

          <fetcher.Form method="patch">
            <Button
              onClick={(e) => {
                e.stopPropagation();
              }}
              type="primary"
              htmlType="submit"
              name="id"
              style={{ backgroundColor: "#026D4D", color: "white" }}
              value={record.id}
            >
              Mở khóa
            </Button>
            <input type="hidden" name="type" value="unban" />
          </fetcher.Form>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Card>
        <Breadcrumbs />
        <Row style={{ marginBottom: "16px" }}>
          <Col>
            <Title level={3} style={{ margin: 0, padding: 0 }}>
              DS Người dùng
            </Title>
          </Col>
        </Row>
        <Row style={{ marginBottom: "12px" }}>
          <Col>
            <Search
              placeholder="Nhập thông tin cần tìm..."
              style={{
                width: 500,
              }}
              onSearch={() => {}}
              enterButton
            />
          </Col>
        </Row>
        <PostTable columns={columns} data={users} abc="DS Người dùng" />,
      </Card>
    </div>
  );
}

export default User;
