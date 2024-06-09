import { Tabs, Card, Row, Col, Typography, Button, Space } from "antd";
import Search from "antd/es/input/Search";
import { useFetcher } from "react-router-dom";
import PostTable from "../components/Table";
import ApiService from "../../../services/ApiService";
import Breadcrumbs from "../../../global/BreadCrumb/BreadCrumb";
import tableColumns from "../components/tableColumns";
import { Loading } from "../../../global/Loading/Loading";
import { useState, useEffect } from "react";
import { deletePost, updateReportStatus } from "../action";
import PostDialog from "../../../global/Dialog/postDialog";

const resolvedUserReportUrl =
  "reports?page=all&type[eq]='post'&status[eq]='resolved'";
const pendingUserReportUrl =
  "reports?page=all&type[eq]='post'&status[eq]='pending'";
const rejectedUserReportUrl =
  "reports?page=all&type[eq]='post'&status[eq]='rejected'";
const fetchReport = async (apiUrl) => {
  // const response = await ApiService.get(apiUrl);
  // const reports = response.result;
  // return reports;
  return [];
};
// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  return await fetchReport(pendingUserReportUrl);
}

async function deletePostAndUpdateReport(reportId, postId) {
  await Promise.all([
    deletePost(postId),
    updateReportStatus(reportId, "resolved"),
  ]);
}

function PostReporting(props) {
  const { Title } = Typography;
  const [isLoading, setIsLoading] = useState(false);
  const [resolvedReports, setResolvedReports] = useState([]);
  const [pendingReports, setPendingReports] = useState([]);
  const [rejectedReports, setRejectedReports] = useState([]);
  const [activeTab, setActiveTab] = useState("1");
  const [loadings, setLoadings] = useState({});

  const handleReportAction = async (reportId, postId, action) => {
    try {
      setLoadings({ ...loadings, [reportId]: true });
      if (action === "resolved") {
        await deletePostAndUpdateReport(reportId, postId, action);
      } else if (action === "rejected") {
        await updateReportStatus(reportId, action);
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoadings({ ...loadings, [reportId]: false });
    }
  };
  const columns = [
    ...tableColumns,
    {
      title: "Bài đăng",
      dataIndex: "reported",
      key: "reported",
      render: (reported) => (
        <Typography.Text
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "200px",
            display: "block",
            color: "blue",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={(e) => {
            onRowHandler(reported);
            e.stopPropagation();
          }}
        >
          {reported?.title?.toString() ?? ""}
        </Typography.Text>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) =>
        loadings[record.id] ? (
          <Loading height="100%" width="100%" />
        ) : (
          <Space size="middle">
            <Button
              loading={isLoading}
              onClick={(e) => {
                e.stopPropagation();
                handleReportAction(record.id, record.reported.id, "resolved");
              }}
              type="primary"
            >
              Duyệt
            </Button>
            <Button
              onClick={(e) => {
                e.stopPropagation();
              }}
              type="primary"
              danger
            >
              Từ chối
            </Button>
          </Space>
        ),
    },
  ];

  const tabs = [
    {
      key: "1",
      label: "Chờ duyệt",
      children: isLoading ? (
        <Loading />
      ) : (
        <PostTable columns={columns} data={pendingReports} />
      ),
    },
    {
      key: "2",
      label: "Đã duyệt",
      children: isLoading ? (
        <Loading />
      ) : (
        <PostTable columns={columns} data={resolvedReports} />
      ),
    },
    {
      key: "3",
      label: "Từ chối",
      children: isLoading ? (
        <Loading />
      ) : (
        <PostTable columns={columns} data={rejectedReports} />
      ),
    },
  ];
  const onTabClick = async (key) => {
    setActiveTab(key);
    setIsLoading(true);

    let apiUrl = "";
    switch (key) {
      case "1":
        apiUrl = pendingUserReportUrl;
        break;
      case "2":
        apiUrl = resolvedUserReportUrl;
        break;
      case "3":
        apiUrl = rejectedUserReportUrl;
        break;
      default:
        break;
    }

    try {
      const reports = await fetchReport(apiUrl);

      switch (key) {
        case "1":
          setPendingReports(reports);
          break;
        case "2":
          setResolvedReports(reports);
          break;
        case "3":
          setRejectedReports(reports);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    onTabClick(activeTab);
  }, []); // Empty dependency array ensures it runs only once on mount

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [item, setItem] = useState(null);
  const onRowHandler = (record) => {
    setIsModalOpen(true);
    setItem(record);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setItem(null);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setItem(null);
  };

  return (
    <div>
      <Card>
        <Breadcrumbs></Breadcrumbs>
        <Row style={{ marginBottom: "16px" }}>
          <Col>
            <Title level={3} style={{ margin: 0, padding: 0 }}>
              DS Tố cáo đã duyệt
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
        {item !== null && (
          <PostDialog
            post={item}
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
          />
        )}
        <Tabs
          defaultActiveKey="1"
          items={tabs}
          onTabClick={(key) => onTabClick(key)}
        />
      </Card>
    </div>
  );
}

export default PostReporting;
