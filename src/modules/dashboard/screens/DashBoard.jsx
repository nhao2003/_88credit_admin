import React from "react";
import { Col, Divider, Row } from "antd";
import AppCircleChart from "../components/AppCircleChart";
import DoubleLineChart from "../components/DoubleLineChart";
import ListUser from "../components/ListUser";
import FiveBarChart from "../components/FiveBarChart";
import { useLoaderData } from "react-router-dom";

const style = {
  background: "#FFFFFF",
  padding: "24px 24px 48px 24px",
  border: "8px solid #F0F2F5",
};

export default function DashBoard() {
  const { dashboard } = useLoaderData();
  return (
    <Row
      gutter={[16, 12]}
      style={{ backgroundColor: "#F0F2F5", padding: "24px 12px" }}
    >
      <Col className="gutter-row" span={6} style={style}>
        <div
          style={{ color: "#8C8C8C", fontSize: "14px", marginBottom: "20px" }}
        >
          Số bài đăng chờ duyệt
        </div>
        <div style={{ fontSize: "30px", fontWeight: "600" }}>
          {dashboard.countPostByStatus.map((i) => {
            if (i.status == "pending") return i.total;
          })}
        </div>
        <Divider />
        <div>
          Số bài đăng đã duyệt:{" "}
          {dashboard.countPostByStatus.map((i) => {
            if (i.status == "approved") return i.total;
          })}
        </div>
      </Col>

      {/* <Col className="gutter-row" span={6} style={style}>
        <div
          style={{ color: '#8C8C8C', fontSize: '14px', marginBottom: '20px' }}
        >
          Số tố cáo chờ duyệt
        </div>
        <div style={{ fontSize: '30px', fontWeight: '600' }}>
          {dashboard.countReportPerStatus.map((i) => {
            if (i.status == 'pending') return i.count;
          })}
        </div>
        <Divider />
        <div>
          Số tố cáo đã duyệt:{' '}
          {dashboard.countReportPerStatus.map((i) => {
            if (i.status == 'resolved') return i.count;
          })}
        </div>
      </Col> */}

      <Col className="gutter-row" span={6} style={style}>
        <div
          style={{ color: "#8C8C8C", fontSize: "14px", marginBottom: "20px" }}
        >
          Số người dùng đang sử dụng
        </div>
        <div style={{ fontSize: "30px", fontWeight: "600" }}>
          {dashboard.countUserPerStatus.num_of_unverified +
            dashboard.countUserPerStatus.num_of_verified +
            dashboard.countUserPerStatus.num_of_banned}
        </div>
        <Divider />
        <div style={{ marginBottom: "10px" }}>
          Số người dùng xác thực: {dashboard.countUserPerStatus.num_of_verified}
        </div>
        <div style={{ marginBottom: "10px" }}>
          Số người dùng chưa: {dashboard.countUserPerStatus.num_of_unverified}
        </div>
        <div style={{ marginBottom: "10px" }}>
          Số người dùng bị ban: {dashboard.countUserPerStatus.num_of_banned}
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
          <div style={{ fontSize: "16px", fontWeight: "600" }}>
            Tỉ lệ nhu cầu vay
          </div>
          <Divider />
          <AppCircleChart
            pieChartData={dashboard.countLoanRequestByLoanReasonTypeInYear}
          />
        </div>
      </Col>
      <Col className="gutter-row" span={6} style={style}>
        <div
          style={{ color: "#8C8C8C", fontSize: "14px", marginBottom: "20px" }}
        >
          Tổng số bài blog đã đăng
        </div>
        <div style={{ fontSize: "30px", fontWeight: "600" }}>
          {dashboard.countBlog}
        </div>
      </Col>

      {/* BIEU DO DUONG */}
      <Col className="gutter-row" span={24}>
        <div style={style}>
          <div>
            <div style={{ fontSize: "16px", fontWeight: "600" }}>
              Số lượng bài đăng vay/cho vay trong năm 2023
            </div>
            <Divider />
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "24px" }}
            >
              <div style={{ width: "75%" }}>
                <DoubleLineChart
                  pieChartData={dashboard.countPostByTypeInMonthOfYear}
                />
              </div>

              <div style={{ fontSize: "14px", fontWeight: "400" }}>
                Top người dùng có nhiều bài đăng nhất
                <ListUser data={dashboard.top_10_users_have_most_posts} />
              </div>
            </div>
          </div>
        </div>
      </Col>

      {/* BIEU DO TRON */}
      {/* <Col className="gutter-row" span={8}>
        <div style={style}>
          <div style={{ fontSize: '16px', fontWeight: '600' }}>
            Tỉ lệ các loại bất động sản trong các bài đăng
          </div>
          <Divider />
          <AppCircleChart
            pieChartData={dashboard.countPostByTypeInMonthOfYear}
          />
        </div>
      </Col> */}

      {/* BIỂU ĐỒ CỘT */}
      {/* <Col className="gutter-row" span={16}>
        <div style={style}>
          <div style={{ fontSize: "16px", fontWeight: "600" }}>
            Top gói dịch vụ được sử dụng nhiều nhất
          </div>
          <Divider />
          <FiveBarChart data={dashboard.countUserPerStatus} />
        </div>
      </Col> */}
    </Row>
  );
}
