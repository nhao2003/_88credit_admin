import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from "recharts";

const COLORS = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];

const AppCircleChart = ({ pieChartData }) => {
  const totalsByReason = {};

  pieChartData.forEach((entry) => {
    console.log("entry: ", entry);
    const reason = entry.loan_reason_type;
    const total = Number(entry.total);

    if (!totalsByReason[reason]) {
      totalsByReason[reason] = 0;
    }

    totalsByReason[reason] += total;
  });

  const data = Object.keys(totalsByReason).map((reason) => ({
    name: reason,
    value: totalsByReason[reason],
  }));

  console.log("aaaa: ", data);

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default AppCircleChart;
