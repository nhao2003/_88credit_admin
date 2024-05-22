import React from 'react';
import {
  Tabs,
  Card,
  Row,
  Col,
  Typography,
  Button,
  Select,
  Table,
  Space,
  Input,
  Modal,
} from 'antd';
import Search from 'antd/es/input/Search';
import { useState, useRef, useEffect } from 'react';
import {
  useNavigate,
  useLoaderData,
  useFetcher,
  Form,
  redirect,
} from 'react-router-dom';
import PostTable from '../components/TableOfPost';
import ApiService from "../../../services/ApiService";
import Breadcrumbs from '../../../global/BreadCrumb/BreadCrumb';
import moment from 'moment';
import { borrowingColumns, lendingColumns } from '../components/tableColumn';

// //function loader to call API
// export async function loader() {
//   const response = await ApiService.get(
//     "posts?post_status[eq]='rejected'&page=all",
//   );
//   const posts = response.result;
//   console.log('length', posts.length);
//   if (!posts) {
//     throw new Response('', {
//       status: 404,
//       statusText: 'Not Found',
//     });
//   }
//   const postLending = posts.filter((post) => post.type === 'lending');
//   const postBorrowing = posts.filter((post) => post.type === 'borrowing');
//   console.log('lease', postLending);
//   console.log('no lease', postBorrowing);
//   return { postLending, postBorrowing };
// }

function RejectedPost(props) {
  const { Title } = Typography;
  const { postLending, postBorrowing } = useLoaderData();
  const fetcher = useFetcher();

  const actionColumn = {
    title: 'Hành động',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button
          onClick={(e) => {
            e.stopPropagation();
          }}
          type="primary"
          name="id"
          value={record.id}
        >
          Duyệt
        </Button>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            showModal();
          }}
          type="primary"
          danger
          name="id"
          value={record.id}
        >
          Từ chối
        </Button>
      </Space>
    ),
  };
  const tabs = [
    {
      key: '1',
      label: 'Cho vay',
      children: (
        <PostTable
          columns={[
            ...lendingColumns,
            // actionColumn
          ]}
          data={postLending}
        />
      ),
    },
    {
      key: '2',
      label: 'Cần vay',
      children: (
        <PostTable
          columns={[
            ...borrowingColumns,
            // actionColumn
          ]}
          data={postBorrowing}
        />
      ),
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOk() {
    setIsModalVisible(false);
  }

  function handleCancel() {
    setIsModalVisible(false);
  }

  return (
    <div>
      <Card>
        <Breadcrumbs></Breadcrumbs>
        <Row style={{ marginBottom: '16px' }}>
          <Col>
            <Title level={3} style={{ margin: 0, padding: 0 }}>
              DS Bài đăng đã từ chối duyệt
            </Title>
          </Col>
        </Row>
        <Row style={{ marginBottom: '12px' }}>
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

        <Tabs defaultActiveKey="1" items={tabs} />
        <Modal
          title="Vui lòng nhập lý do từ chối bài đăng này"
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            style={{ marginTop: '24px' }}
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
      </Card>
    </div>
  );
}

export default RejectedPost;
