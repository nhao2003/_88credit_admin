import React, { useState } from 'react';
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
  Avatar,
} from 'antd';
import moment from 'moment';
import addressService from '../../../services/addressService';
import { useNavigate } from 'react-router-dom';
import {
  CloseOutlined,
  DeleteOutlined,
  ExclamationCircleFilled,
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Column from 'antd/es/table/Column';

const { confirm } = Modal;
// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows,
    );
  },
};

function PostTable(props) {
  const { Title } = Typography;
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [item, setItem] = useState({});

  const showModal = (props) => {
    setIsModalOpen(true);
    setItem(props);
    console.log('Props: ', props);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showDeleteConfirm = () => {
    confirm({
      title: 'Bạn thật sự muốn xóa bài đăng này?',
      icon: <ExclamationCircleFilled />,
      content: 'Bài đăng sẽ biến mất trên app của người dùng nếu bạn xoá nó.',
      okText: 'Có',
      okType: 'danger',
      cancelText: 'Không',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <div>
      <Flex gap="middle" justify="space-between" align="center">
        <Title level={4}>{props.abc}</Title>
      </Flex>
      <Row style={{ display: 'flex' }}>
        <Table
          rowSelection
          style={{ width: '100%' }}
          rowClassName="custom-row"
          dataSource={props.data}
          columns={props.columns}
          onRow={(record) => ({
            onClick: () => {
              showModal(record);
            },
          })}
        />

        {/* POP-UP */}
        {/* <Modal title={item.name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}> */}

        <Modal
          title={item.first_name + ' ' + item.last_name}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={(_, { OkBtn, CancelBtn }) => (
            <>
              <Button
                type="primary"
                icon={<DeleteOutlined />}
                danger
                onClick={showDeleteConfirm}
              >
                Xóa
              </Button>
            </>
          )}
        >
          {/* Form */}
          <Form
            style={{ marginTop: '24px' }}
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item label="Họ tên">
              <Typography.Text>
                {item.first_name + ' ' + item.last_name}
              </Typography.Text>
            </Form.Item>

            <Form.Item label="Email">
              <Typography.Text>{item.email}</Typography.Text>
            </Form.Item>

            <Form.Item label="Avatar">
              {item.avatar ? (
                <Avatar src={item.avatar} />
              ) : (
                <Avatar icon={<UserOutlined />} />
              )}
            </Form.Item>

            <Form.Item label="Địa chỉ">
              <Typography.Text>
                {item.address === null || item.address === undefined
                  ? 'Chưa có địa chỉ'
                  : (item.address['address'] !== null
                      ? item.address['detail'] + ', '
                      : '') +
                    addressService.getDetailedAddress(
                      Number(item.address['province_code']),
                      Number(item.address['district_code']),
                      Number(item.address['ward_code']),
                    )}
              </Typography.Text>
            </Form.Item>

            <Form.Item label="Ngày sinh">
              <Typography.Text>
                {moment(item.dob).format('DD/MM/YYYY')}
              </Typography.Text>
            </Form.Item>

            <Form.Item label="Giới tính">
              <Typography.Text>{item.gender ? 'Nam' : 'Nữ'}</Typography.Text>
            </Form.Item>

            <Form.Item label="Số điện thoại">
              <Typography.Text>{item.phone}</Typography.Text>
            </Form.Item>

            <Form.Item label="Vai trò">
              <Typography.Text>{item.role}</Typography.Text>
            </Form.Item>

            <Form.Item label="Trạng thái">
              <Typography.Text>{item.status}</Typography.Text>
            </Form.Item>
          </Form>
        </Modal>
      </Row>
    </div>
  );
}

export default PostTable;
