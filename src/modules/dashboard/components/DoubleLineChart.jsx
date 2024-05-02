import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#1890FF",
  "#13C2C2",
  "#52C41A",
  "#FADB14",
  "#FF4D4F",
  "#722ED1",
];

const DoubleLineChart = ({ pieChartData }) => {
  // Tạo một mảng các tháng từ 1 đến 12
  const allMonths = Array.from({ length: 12 }, (_, index) => String(index + 1));

  // Tạo đối tượng để lưu trữ dữ liệu của tất cả các tháng
  let totalsByMonth = {};

  // Điền vào dữ liệu từ pieChartData
  for (const i of pieChartData) {
    const month = i.month;
    const type = i.type;
    const total = Number(i.total);

    if (!totalsByMonth[month]) {
      totalsByMonth[month] = { lending: 0, borrowing: 0 };
    }

    if (type === "lending") {
      totalsByMonth[month].lending += total;
    } else if (type === "borrowing") {
      totalsByMonth[month].borrowing += total;
    }
  }

  // Điền vào dữ liệu cho các tháng không có dữ liệu
  for (const month of allMonths) {
    if (!totalsByMonth[month]) {
      totalsByMonth[month] = { lending: 0, borrowing: 0 };
    }
  }

  const data = allMonths.map((month) => {
    return {
      name: `Tháng ${month}`,
      lending: totalsByMonth[month].lending,
      borrowing: totalsByMonth[month].borrowing,
    };
  });

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="borrowing"
          stroke={COLORS[0]}
          activeDot={{ r: 8 }}
          strokeWidth="2"
        />
        <Line
          type="monotone"
          dataKey="lending"
          stroke={COLORS[1]}
          strokeWidth="2"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DoubleLineChart;
