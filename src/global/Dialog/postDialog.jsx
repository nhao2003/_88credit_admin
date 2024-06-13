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

function PostDialog(props) {
  const item = props.post;
  const isModalOpen = props.isModalOpen;
  const handleOk = props.handleOk;
  const handleCancel = props.handleCancel;
  console.log("PostDialog: ", item);
  return (
    <Modal
      title={item.title}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        style={{ marginTop: "24px" }}
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item label="ID bài đăng">
          <Typography.Text>{item.id}</Typography.Text>
        </Form.Item>

        {item.user && (
          <Form.Item label="Người đăng">
            <Typography.Text>
              {`${item.user.firstName} ${item.user.lastName}`}
            </Typography.Text>
          </Form.Item>
        )}

        <Form.Item label="Ngày đăng">
          <Typography.Text>
            {moment(item.createdAt).format("hh:mm DD/MM/YYYY")}
          </Typography.Text>
        </Form.Item>

        <Form.Item label="Tiêu đề">
          <Typography.Text>{item.title}</Typography.Text>
        </Form.Item>

        <Form.Item label="Mô tả">
          <Typography.Text>{item.description}</Typography.Text>
        </Form.Item>

        <Form.Item label="Loại lý do vay">
          <Typography.Text>{item.loanReason}</Typography.Text>
        </Form.Item>

        <Form.Item label="Lý do vay">
          <Typography.Text>{item.loanReasonDescription}</Typography.Text>
        </Form.Item>

        <Form.Item label="Số tiền vay">
          {item.type === "lending" ? (
            <Typography.Text>{`${item.amount} - ${item.maxAmount}`}</Typography.Text>
          ) : (
            <Typography.Text>{item.amount} VNĐ</Typography.Text>
          )}
        </Form.Item>

        <Form.Item label="Thời hạn vay">
          {/* <Typography.Text>{item.tenure_months} tháng</Typography.Text> */}
          {item.type === "lending" ? (
            <Typography.Text>{`${item.duration} - ${item.maxDuration} tháng`}</Typography.Text>
          ) : (
            <Typography.Text>{item.duration} tháng</Typography.Text>
          )}
        </Form.Item>

        <Form.Item label="Lãi suất">
          {item.type === "lending" ? (
            <Typography.Text>{`${item.interestRate * 100}% - ${
              item.maxInterestRate * 100
            }%`}</Typography.Text>
          ) : (
            <Typography.Text>{item.interestRate * 100}%</Typography.Text>
          )}
        </Form.Item>

        <Form.Item label="Lãi suất quá hạn">
          {item.type === "lending" ? (
            <Typography.Text>{`${item.overdueInterestRate * 100}% - ${
              item.maxOverdueInterestRate * 100
            }%`}</Typography.Text>
          ) : (
            <Typography.Text>{item.overdueInterestRate * 100}%</Typography.Text>
          )}
        </Form.Item>

        {item.status === "rejected" && (
          <Form.Item label="Lý do từ chối">
            <Typography.Text>{item.rejectedReason ?? ""}</Typography.Text>
          </Form.Item>
        )}

        <Flex>
          {item.images.map((item, index) => (
            <Image height={100} width={200} src={item} key={index} />
          ))}
        </Flex>
      </Form>
    </Modal>
  );
}

export default PostDialog;
