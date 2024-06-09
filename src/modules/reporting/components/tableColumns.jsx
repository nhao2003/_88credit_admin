import moment from "moment";
export default [
    {
      title: 'Loại',
      dataIndex: 'content_type',
      key: 'content_type',
    },
    {
      title: 'Người tố cáo',
      dataIndex: 'reporter',
      key: 'reporter',
      render: (user) => user.first_name + ' ' + user.last_name,
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'created_date',
      key: 'created_date',
      render: (datee) => moment(datee).format('hh:mm DD/MM/YYYY'),
    }
  ];