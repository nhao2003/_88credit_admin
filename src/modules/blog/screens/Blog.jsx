import React from "react";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import { List } from "antd";
import { Card, Row, Col, Button, Flex } from "antd";
import Search from "antd/es/input/Search";
import Breadcrumbs from "../../../global/BreadCrumb/BreadCrumb";
import { useState } from "react";
import { useNavigate, useLoaderData, useFetcher } from "react-router-dom";
import Title from "antd/es/typography/Title";
import ApiService from "../../../services/ApiService";

//function loader to call API
export async function loader() {
  const res = await ApiService.get("blog");
  const blogs = res.data.items;
  return { blogs };
}

export default function Blog() {
  const { blogs } = useLoaderData();
  const fetcher = useFetcher();

  const navigate = useNavigate();

  return (
    <div>
      <Card>
        <Breadcrumbs />
        <Row style={{ marginBottom: "16px" }}>
          <Col>
            <Title level={3} style={{ margin: 0, padding: 0 }}>
              Blog
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
        <Flex gap="middle" justify="end" align="center">
          <Button
            type="primary"
            size="middle"
            icon={<PlusOutlined />}
            style={{
              backgroundColor: "#1890FF",
              marginLeft: "12px",
              marginTop: "16px",
            }}
            onClick={() => {
              navigate("/blogs/add");
            }}
          >
            Thêm
          </Button>
        </Flex>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={Array.isArray(blogs) ? blogs : []}
          renderItem={(item) => {
            return (
              <List.Item
                onClick={() => {
                  console.log("item:", item);
                  navigate(`/blogs/${item.id}`);
                }}
                key={item.id}
                actions={[
                  <Button
                    key={item.id}
                    type="primary"
                    size="middle"
                    icon={<EditOutlined />}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/blogs/edit/${item.id}`);
                    }}
                  >
                    Sửa
                  </Button>,
                  <fetcher.Form method="post" key={item.id}>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      type="primary"
                      danger
                      htmlType="submit"
                      name="id"
                      value={item.id}
                    >
                      Xóa
                    </Button>
                    <input type="hidden" name="type" value="delete" />
                  </fetcher.Form>,
                ]}
                extra={<img width={272} alt="logo" src={item.thumbnail} />}
              >
                <List.Item.Meta
                  title={<a href={item.href}>{item.title}</a>}
                  description={`${item.short_description}`}
                />
              </List.Item>
            );
          }}
        />
      </Card>
    </div>
  );
}
