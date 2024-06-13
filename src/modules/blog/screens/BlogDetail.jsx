// HtmlContent.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import ApiService from "../../../services/ApiService";
import { useNavigate, useLoaderData, useFetcher } from "react-router-dom";
import { Button, Card, Flex, Space, Typography } from "antd";
import HtmlContent from "../../../global/Blog/HtmlContent";
const { Title } = Typography;
import moment from "moment";

export async function loader({ params }) {
  console.log("params:", params);
  const res = await ApiService.get(`blog/${params.id}`);
  const blog = res.data;
  console.log("This is blog: ", blog);
  if (!blog) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { blog };
}

function BlogDetail() {
  const { blog } = useLoaderData();
  const fetcher = useFetcher();
  const navigate = useNavigate();
  //style
  const titleStyle = {
    textAlign: "center",
  };
  const containerStyle = {
    height: "450px",
    overflow: "auto",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    boxSizing: "border-box",
  };

  return (
    <Card>
      <Flex vertical>
        <Flex justify="flex-end">
          {" "}
          <Space>
            <fetcher.Form method="patch">
              <Button
                type="primary"
                danger
                htmlType="submit"
                name="id"
                value={blog.id}
              >
                Xóa
              </Button>
              <input type="hidden" name="type" value="delete" />
            </fetcher.Form>
            <Button
              type="primary"
              size="middle"
              onClick={() => {
                navigate(`/blogs/edit/${blog.id}`);
              }}
            >
              Chỉnh sửa
            </Button>
          </Space>
        </Flex>
        <Title level={3} style={titleStyle}>
          {blog.title}
        </Title>
        <Flex vertical align="flex-start">
          <Title level={5} italic style={titleStyle}>
            Đăng ngày: {moment(blog.created_at).format("DD/MM/YYYY")}
          </Title>
          <Title level={5} italic style={titleStyle}>
            Tác giả: {blog.author}
          </Title>
        </Flex>
        <div style={containerStyle}>
          <HtmlContent html={blog.content} />
        </div>
      </Flex>
    </Card>
  );
}

export default BlogDetail;
