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
              {`${item.user.first_name} ${item.user.last_name}`}
            </Typography.Text>
          </Form.Item>
        )}

        <Form.Item label="Ngày đăng">
          <Typography.Text>
            {moment(item.posted_date).format("hh:mm DD/MM/YYYY")}
          </Typography.Text>
        </Form.Item>

        <Form.Item label="Tiêu đề">
          <Typography.Text>{item.title}</Typography.Text>
        </Form.Item>

        <Form.Item label="Mô tả">
          <Typography.Text>{item.description}</Typography.Text>
        </Form.Item>

        <Form.Item label="Loại lý do vay">
          <Typography.Text>{item.loan_reason_type}</Typography.Text>
        </Form.Item>

        <Form.Item label="Lý do vay">
          <Typography.Text>{item.loan_reason}</Typography.Text>
        </Form.Item>

        <Form.Item label="Số tiền vay">
          {item.type === "lending" ? (
            <Typography.Text>{`${item.loan_amount} - ${item.max_loan_amount}`}</Typography.Text>
          ) : (
            <Typography.Text>{item.loan_amount} VNĐ</Typography.Text>
          )}
        </Form.Item>

        <Form.Item label="Thời hạn vay">
          {/* <Typography.Text>{item.tenure_months} tháng</Typography.Text> */}
          {item.type === "lending" ? (
            <Typography.Text>{`${item.tenure_months} - ${item.max_tenure_months} tháng`}</Typography.Text>
          ) : (
            <Typography.Text>{item.tenure_months} tháng</Typography.Text>
          )}
        </Form.Item>

        <Form.Item label="Lãi suất">
          {item.type === "lending" ? (
            <Typography.Text>{`${item.interest_rate * 100}% - ${
              item.max_interest_rate * 100
            }%`}</Typography.Text>
          ) : (
            <Typography.Text>{item.interest_rate * 100}%</Typography.Text>
          )}
        </Form.Item>

        <Form.Item label="Lãi suất quá hạn">
          {item.type === "lending" ? (
            <Typography.Text>{`${item.overdue_interest_rate * 100}% - ${
              item.max_overdue_interest_rate * 100
            }%`}</Typography.Text>
          ) : (
            <Typography.Text>
              {item.overdue_interest_rate * 100}%
            </Typography.Text>
          )}
        </Form.Item>

        {item.status === "rejected" && (
          <Form.Item label="Lý do từ chối">
            <Typography.Text>{item.rejected_reason ?? ""}</Typography.Text>
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
