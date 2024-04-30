import { Spin, Flex, Space } from "antd";

const Loading = (props) => {
  return (
    <Space
      style={{
        minHeight: props.height || "100vh",
        width: props.width || "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin size="large" />
    </Space>
  );
};

export { Loading };
