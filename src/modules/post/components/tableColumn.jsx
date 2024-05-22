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
      render: title => title.slice(0, 50) + "...",
    },
    {
      title: "Người đăng",
      dataIndex: "user",
      key: "user",
      // render: (user) => {
      //   if(user.first_name && user.last_name){
      //     return user.first_name + " "+ user.last_name
      //   }
      //   return user.email
      // }
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      render: description => description.slice(0, 50) + "...",
    },
    {
      title: "Số tiền cho vay",
      dataIndex: "loan_amount",
      sorter: (a, b) => a.loan_amount - b.loan_amount,
      key: "loan_amount",
      render: (loan_amount, record) => {
        const min = record.loan_amount;
        const max = record.max_loan_amount;
        return min + " - " + max + " đồng "
      }
    },
    {
      title: "Lý do vay",
      dataIndex: "loan_reason",
      key: "loan_reason",
    },
    {
      title: "Ngày đăng",
      dataIndex: "posted_date",
      key: "posted_date",
      render: datee => moment(datee).format('hh:mm DD/MM/YYYY'),
      sorter: (a, b) => a.posted_date - b.posted_date,
    },
    {
      title: "Lãi suất",
      dataIndex: "interest_rate",
      key: "interest_rate",
      render: (interest_rate, record) => {
        const min = record.interest_rate * 100;
        const max = record.max_interest_rate * 100;
        return min + "% - " + max + "%"
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
        return min + "% - " + max + "%"
      }
    },
    {
      title: "Thời hạn vay",
      dataIndex: "tenure_months",
      key: "tenure_months",
      render: (tenure_months, record) => {
        const min = record.tenure_months;
        const max = record.max_tenure_months;
        return min + " - " + max + " tháng"
      }
    }
  ];

  export const postColumns = {
    tileColumn:     {
        title: "Tiêu đề",
        dataIndex: "title",
        key: "title",
        // render: (title, record) => {
        //   return <a onClick={()=>{
        //     navigate("/post/"+record.id)
        //   }}>{title}</a>
        // }
        render: title => title.slice(0, 50) + "...",
      },
        userColumn: {
            title: "Người đăng",
            dataIndex: "user",
            key: "user",
            // render: (user) => {
            // if(user.first_name && user.last_name){
            //     return user.first_name + " "+ user.last_name
            // }
            // return user.email
            // }
        },
        descriptionColumn: {
            title: "Mô tả",
            dataIndex: "description",
            key: "description",
            render: description => description.slice(0, 50) + "...",
        },
        loanAmountColumn: {
            title: "Số tiền cho vay",
            dataIndex: "loan_amount",
            sorter: (a, b) => a.loan_amount - b.loan_amount,
            key: "loan_amount",
            render: (loan_amount, record) => {
            const min = record.loan_amount;
            const max = record.max_loan_amount;
            return min + " - " + max + " đồng "
            }
        },
        loanReasonColumn: {
            title: "Lý do vay",
            dataIndex: "loan_reason",
            key: "loan_reason",
        },
        postedDateColumn: {
            title: "Ngày đăng",
            dataIndex: "posted_date",
            key: "posted_date",
            render: datee => moment(datee).format('hh:mm DD/MM/YYYY'),
            sorter: (a, b) => a.posted_date - b.posted_date,
        },
        interestRateColumn: {
            title: "Lãi suất",
            dataIndex: "interest_rate",
            key: "interest_rate",
            render: (interest_rate, record) => {
            const min = record.interest_rate * 100;
            const max = record.max_interest_rate * 100;
            return min + "% - " + max + "%"
            },
            sorter: (a, b) => a.interest_rate - b.interest_rate,
        },
        overdueInterestRateColumn: {
            title: "Lãi suất trễ hạn",
            dataIndex: "overdue_interest_rate",
            key: "overdue_interest_rate",
            render: (overdue_interest_rate, record) => {
            const min = record.interest_rate * 100;
            const max = record.max_interest_rate * 100;
            return min + "% - " + max + "%"
            }
        },
        tenureMonthsColumn: {
            title: "Thời hạn vay",
            dataIndex: "tenure_months",
            key: "tenure_months",
            render: (tenure_months, record) => {
            const min = record.tenure_months;
            const max = record.max_tenure_months;
            return min + " - " + max + " tháng"
            }
        }
  }

  export const lendingColumns = [
    postColumns.tileColumn,
    postColumns.userColumn,
    postColumns.descriptionColumn,
    postColumns.loanReasonColumn,
    postColumns.interestRateColumn,
    postColumns.overdueInterestRateColumn,
    postColumns.postedDateColumn,
  ]

    export const borrowingColumns = [
        postColumns.tileColumn,
        postColumns.userColumn,
        postColumns.descriptionColumn,
        postColumns.loanAmountColumn,
        postColumns.loanReasonColumn,
        postColumns.postedDateColumn,
        {
            title: "Thời hạn vay",
            dataIndex: "tenure_months",
            key: "tenure_months",
            render: (tenure_months) => tenure_months + " tháng"
        },
        {
            title: "Lãi suất",
            dataIndex: "interest_rate",
            key: "interest_rate",
            render: (interest_rate) => interest_rate * 100 + "%"
        },
        {
            title: "Lãi suất trễ hạn",
            dataIndex: "overdue_interest_rate",
            key: "overdue_interest_rate",
            render: (overdue_interest_rate) => overdue_interest_rate * 100 + "%"
        },
    ]
