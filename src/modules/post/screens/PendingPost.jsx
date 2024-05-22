import React from 'react';
import {
  Tabs,
  Card,
  Row,
  Col,
  Typography,
  Button,
  Space,
  Input,
  Modal,
} from 'antd';
import Search from 'antd/es/input/Search';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PostTable from '../components/TableOfPost';
//import ApiService from '../../../service/ApiService';
import ApiService from "../../../services/ApiService";
//import Breadcrumbs from '../../../Components/BreadCrumb/BreadCrumb';
import Breadcrumbs from "../../../global/BreadCrumb/BreadCrumb";
import { borrowingColumns, lendingColumns } from '../components/tableColumn';
import { approvePost, rejectPost } from '../action';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles
import { ToastContainer } from 'react-toastify';

//function loader to call API
// export async function loader() {
//   const response = await ApiService.get(
//     "posts?post_status[eq]='pending'&page=all",
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

function PendingPost(props) {
  const { Title } = Typography;
  const { postLending: pLending, postBorrowing } = useLoaderData();
  const [postsLending, setPostsLending] = useState(pLending);
  const [postsBorrowing, setPostsBorrowing] = useState(postBorrowing);
  const actionColumn = {
    title: 'Hành động',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button
          onClick={(e) => {
            handleApprovePost(record.id);
            e.stopPropagation();
            // setCurrentPost(record);
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
            showModal(record);
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
          columns={[...lendingColumns, actionColumn]}
          data={postsLending}
        />
      ),
    },
    {
      key: '2',
      label: 'Cần vay',
      children: (
        <PostTable
          columns={[...borrowingColumns, actionColumn]}
          data={postsBorrowing}
        />
      ),
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = (post) => {
    setIsModalVisible(true);
    setCurrentPost(post);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOk() {
    setIsModalVisible(false);
    handleRejectPost();
  }

  function handleCancel() {
    setIsModalVisible(false);
    setCurrentPost(null);
    setRejectReason(null);
  }
  function handleRejectPost() {
    // rejectPost
    rejectPost(currentPost.id, rejectReason)
      .then((res) => {
        if (res) {
          setIsModalVisible(false);
          setRejectReason(null);
          setCurrentPost(null);
          console.log('res', currentPost);
          toast.success('Từ chối bài đăng thành công');
          if (currentPost.type === 'lending') {
            setPostsLending(
              postsLending.filter((post) => post.id !== currentPost.id),
            );
          } else {
            console.log('no lease');
            setPostsBorrowing(
              postsBorrowing.filter((post) => post.id !== currentPost.id),
            );
          }
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Có lỗi xảy ra, vui lòng thử lại sau');
      });
  }

  function handleApprovePost(id) {
    approvePost(id)
      .then((res) => {
        toast.success('Duyệt bài đăng thành công');
        if (postsLending.find((post) => post.id === id)) {
          setPostsLending(postsLending.filter((post) => post.id !== id));
        } else {
          setPostsBorrowing(postsBorrowing.filter((post) => post.id !== id));
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Có lỗi xảy ra, vui lòng thử lại sau');
      });
  }

  const [currentPost, setCurrentPost] = useState(null);
  const [rejectReason, setRejectReason] = useState(null);
  return (
    <div>
      <Card>
        <Breadcrumbs></Breadcrumbs>
        <Row style={{ marginBottom: '16px' }}>
          <Col>
            <ToastContainer />

            <Title level={3} style={{ margin: 0, padding: 0 }}>
              DS Bài đăng chờ duyệt
            </Title>
          </Col>
        </Row>
        <Modal
          title="Vui lòng nhập lý do từ chối bài đăng này"
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Input
            placeholder="Nhập lý do từ chối..."
            value={rejectReason}
            onChange={(e) => setRejectReason(e.target.value)}
          />
        </Modal>
        <Tabs defaultActiveKey="1" items={tabs} />
      </Card>
    </div>
  );
}

export default PendingPost;
