import { Tabs, Card, Row, Col, Typography, Button, Space } from "antd";
import Search from "antd/es/input/Search";
import { useFetcher } from "react-router-dom";
import PostTable from "../components/Table";
import ApiService from "../../../services/ApiService";
import Breadcrumbs from "../../../global/BreadCrumb/BreadCrumb";
import tableColumns from "../components/tableColumns";
import { Loading } from "../../../global/Loading/Loading";
import { useState, useEffect } from "react";

const resolvedUserReportUrl =
  "reports?page=all&type[eq]='user'&status[eq]='resolved'";
const pendingUserReportUrl =
  "reports?page=all&type[eq]='user'&status[eq]='pending'";
const rejectedUserReportUrl =
  "reports?page=all&type[eq]='user'&status[eq]='rejected'";
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

function UserReporting(props) {
  const { Title } = Typography;
  const [isLoading, setIsLoading] = useState(false);
  const [resolvedReports, setResolvedReports] = useState([]);
  const [pendingReports, setPendingReports] = useState([]);
  const [rejectedReports, setRejectedReports] = useState([]);
  const [activeTab, setActiveTab] = useState("1");
  const fetcher = useFetcher();
  const columns = [
    ...tableColumns,
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <fetcher.Form method="post">
            <Button
              onClick={(e) => {
                e.stopPropagation();
              }}
              type="primary"
              htmlType="submit"
              name="id"
              value={record.id}
            >
              Duyệt
            </Button>
            <input type="hidden" name="type" value="approve" />
          </fetcher.Form>
          <fetcher.Form method="post">
            <Button
              onClick={(e) => {
                e.stopPropagation();
              }}
              type="primary"
              danger
              htmlType="submit"
              name="id"
              value={record.id}
            >
              Từ chối
            </Button>
            <input type="hidden" name="type" value="reject" />
          </fetcher.Form>
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
        <Tabs
          defaultActiveKey="1"
          items={tabs}
          onTabClick={(key) => onTabClick(key)}
        />
      </Card>
    </div>
  );
}

export default UserReporting;
