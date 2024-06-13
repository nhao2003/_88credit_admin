import moment from "moment";

const columns = [
  {
    title: "Tiêu đề",
    dataIndex: "title",
    key: "title",
    // render: (title, record) => {
    //   return <a onClick={()=>{
    //     navigate("/post/"+record.id)
    //   }}>{title}</a>
    // }
    render: (title) => title.slice(0, 50) + "...",
  },
  {
    title: "Người đăng",
    dataIndex: "user",
    key: "user",
    render: (user) => {
      if (user.firstName && user.lastName) {
        return user.firstName + " " + user.lastName;
      }
      return user.email;
    },
  },
  {
    title: "Mô tả",
    dataIndex: "description",
    key: "description",
    render: (description) => description.slice(0, 50) + "...",
  },
  {
    title: "Số tiền cho vay",
    dataIndex: "amount",
    sorter: (a, b) => a.amount - b.amount,
    key: "amount",
    render: (amount, record) => {
      const min = record.amount;
      const max = record.maxAmount;
      return min + " - " + max + " đồng ";
    },
  },
  {
    title: "Lý do vay",
    dataIndex: "loanReason",
    key: "loanReason",
  },
  {
    title: "Ngày đăng",
    dataIndex: "posted_date",
    key: "posted_date",
    render: (datee) => moment(datee).format("hh:mm DD/MM/YYYY"),
    sorter: (a, b) => a.posted_date - b.posted_date,
  },
  {
    title: "Lãi suất",
    dataIndex: "interest_rate",
    key: "interest_rate",
    render: (interest_rate, record) => {
      const min = record.interest_rate * 100;
      const max = record.max_interest_rate * 100;
      return min + "% - " + max + "%";
    },
    sorter: (a, b) => a.interest_rate - b.interest_rate,
  },
  {
    title: "Lãi suất trễ hạn",
    dataIndex: "overdue_interest_rate",
    key: "overdue_interest_rate",
    render: (overdue_interest_rate, record) => {
      const min = record.interest_rate * 100;
      const max = record.max_interest_rate * 100;
      return min + "% - " + max + "%";
    },
  },
  {
    title: "Thời hạn vay",
    dataIndex: "tenure_months",
    key: "tenure_months",
    render: (tenure_months, record) => {
      const min = record.tenure_months;
      const max = record.max_tenure_months;
      return min + " - " + max + " tháng";
    },
  },
];

export const postColumns = {
  tileColumn: {
    title: "Tiêu đề",
    dataIndex: "title",
    key: "title",
    // render: (title, record) => {
    //   return <a onClick={()=>{
    //     navigate("/post/"+record.id)
    //   }}>{title}</a>
    // }
    render: (title) => title.slice(0, 50) + "...",
  },
  userColumn: {
    title: "Người đăng",
    dataIndex: "user",
    key: "user",
    render: (user) => {
      if (user.firstName && user.lastName) {
        return user.firstName + " " + user.lastName;
      }
      return user.email;
    },
  },
  descriptionColumn: {
    title: "Mô tả",
    dataIndex: "description",
    key: "description",
    render: (description) => description.slice(0, 50) + "...",
  },
  loanAmountColumn: {
    title: "Số tiền cho vay",
    dataIndex: "amount",
    sorter: (a, b) => a.amount - b.amount,
    key: "amount",
    render: (amount, record) => {
      const min = record.amount;
      const max = record.maxAmount;
      if (max == null) return min + " đồng ";
      return min + " - " + max + " đồng ";
    },
  },
  loanReasonColumn: {
    title: "Lý do vay",
    dataIndex: "loanReasonDescription",
    key: "loanReasonDescription",
  },
  postedDateColumn: {
    title: "Ngày đăng",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (datee) => moment(datee).format("hh:mm DD/MM/YYYY"),
    sorter: (a, b) => a.createdAt - b.createdAt,
  },
  interestRateColumn: {
    title: "Lãi suất",
    dataIndex: "interestRate",
    key: "interestRate",
    render: (interestRate, record) => {
      const min = record.interestRate * 100;
      const max = record.maxInterestRate * 100;
      return min + "% - " + max + "%";
    },
    sorter: (a, b) => a.interestRate - b.interestRate,
  },
  overdueInterestRateColumn: {
    title: "Lãi suất trễ hạn",
    dataIndex: "overdueInterestRate",
    key: "overdueInterestRate",
    render: (overdueInterestRate, record) => {
      const min = record.interestRate * 100;
      const max = record.maxInterestRate * 100;
      return min + "% - " + max + "%";
    },
  },
  tenureMonthsColumn: {
    title: "Thời hạn vay",
    dataIndex: "duration",
    key: "duration",
    render: (duration, record) => {
      const min = record.duration;
      const max = record.maxDuration;
      return min + " - " + max + " tháng";
    },
  },
};

export const lendingColumns = [
  postColumns.tileColumn,
  postColumns.userColumn,
  postColumns.loanAmountColumn,
  postColumns.descriptionColumn,
  postColumns.loanReasonColumn,
  postColumns.interestRateColumn,
  postColumns.overdueInterestRateColumn,
  postColumns.postedDateColumn,
];

export const borrowingColumns = [
  postColumns.tileColumn,
  postColumns.userColumn,
  postColumns.descriptionColumn,
  postColumns.loanAmountColumn,
  postColumns.loanReasonColumn,
  postColumns.postedDateColumn,
  {
    title: "Thời hạn vay",
    dataIndex: "duration",
    key: "duration",
    render: (duration) => duration + " tháng",
  },
  {
    title: "Lãi suất",
    dataIndex: "interestRate",
    key: "interestRate",
    render: (interestRate) => interestRate * 100 + "%",
  },
  {
    title: "Lãi suất trễ hạn",
    dataIndex: "overdueInterestRate",
    key: "overdueInterestRate",
    render: (overdueInterestRate) => overdueInterestRate * 100 + "%",
  },
];
