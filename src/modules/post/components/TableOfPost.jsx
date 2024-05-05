import React, { useState } from "react";
import {
  Row,
  Table,
  Modal,
  Form,
  Input,
  Button,
  Col,
  Flex,
  Typography,
  Image,
} from "antd";
const { TextArea } = Input;
import { useNavigate } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import moment from "moment";

import PostDialog from "../../../global/Dialog/postDialog";
function PostTable(props) {
  const { Title } = Typography;
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const [item, setItem] = useState({});

  const onRowHandler = (record) => {
    setIsModalOpen(true);
    setItem(record);
  };

  const showModal1 = (props) => {
    handleCancel();
    setIsModalOpen1(true);
  };

  const handleOk1 = () => {
    setIsModalOpen1(false);
  };

  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Row style={{ display: "flex" }}>
        <Table
          style={{ width: "100%" }}
          rowClassName="custom-row"
          dataSource={props.data}
          columns={props.columns}
          pagination={{ pageSize: 5 }}
          onRow={(record) => ({
            onClick: () => {
              onRowHandler(record);
            },
          })}
        />

        {Object.keys(item).length !== 0 && (
          <>
            <PostDialog
              key={item.id}
              post={item}
              isModalOpen={isModalOpen}
              handleOk={handleOk}
              handleCancel={handleCancel}
            />
            <Modal
              key={item.id}
              title="Vui lòng nhập lý do từ chối bài đăng này"
              open={isModalOpen1}
              onOk={handleOk1}
              onCancel={handleCancel1}
              footer={(_, { OkBtn1, CancelBtn1 }) => (
                <>
                  <Button type="primary" icon={<CloseOutlined />} danger>
                    Từ chối
                  </Button>
                </>
              )}
            >
              <Form
                key={item.id}
                style={{ marginTop: "24px" }}
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                autoComplete="off"
              >
                <Form.Item label="Lý do từ chối">
                  <Input placeholder="Nhập lý do từ chối..." />
                </Form.Item>
              </Form>
            </Modal>
          </>
        )}
      </Row>
    </div>
  );
}

export default PostTable;
