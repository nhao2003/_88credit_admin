import ApiService from "../services/ApiService";

export async function DashboardRepo() {
  // const result = (await ApiService.get("statistic")).result;
  const result = {
    top_10_users_have_most_posts: [
      {
        user_id: 1,
        first_name: "Minh",
        last_name: "Phan",
        post_count: 10,
      },
      {
        user_id: 2,
        first_name: "Huy",
        last_name: "Nguyen",
        post_count: 20,
      },
      {
        user_id: 3,
        first_name: "Nam",
        last_name: "Tran",
        post_count: 30,
      },
      {
        user_id: 4,
        first_name: "Hieu",
        last_name: "Pham",
        post_count: 40,
      },
      {
        user_id: 5,
        first_name: "Hoa",
        last_name: "Nguyen",
        post_count: 50,
      },
    ],
    count_user_per_status: {
      num_of_unverified: 20,
      num_of_verified: 20,
      num_of_banned: 10,
    },
    count_post_by_status: [
      {
        status: "pending",
        total: 10,
      },
      {
        status: "approved",
        total: 20,
      },
    ],
    count_post_by_type_in_month_of_year: [
      {
        month: 1,
        type: "lending",
        total: 10,
      },
      {
        month: 2,
        type: "lending",
        total: 15,
      },
      {
        month: 3,
        type: "lending",
        total: 10,
      },
      {
        month: 4,
        type: "lending",
        total: 2,
      },
      {
        month: 5,
        type: "lending",
        total: 20,
      },
      {
        month: 6,
        type: "lending",
        total: 18,
      },
      {
        month: 7,
        type: "lending",
        total: 40,
      },
      {
        month: 8,
        type: "lending",
        total: 34,
      },
      {
        month: 9,
        type: "lending",
        total: 21,
      },
      {
        month: 10,
        type: "lending",
        total: 20,
      },
      {
        month: 11,
        type: "lending",
        total: 18,
      },
      {
        month: 12,
        type: "lending",
        total: 30,
      },
      {
        month: 1,
        type: "borrowing",
        total: 2,
      },
      {
        month: 2,
        type: "borrowing",
        total: 5,
      },
      {
        month: 3,
        type: "borrowing",
        total: 20,
      },
      {
        month: 4,
        type: "borrowing",
        total: 15,
      },
      {
        month: 5,
        type: "borrowing",
        total: 30,
      },
      {
        month: 6,
        type: "borrowing",
        total: 20,
      },
      {
        month: 7,
        type: "borrowing",
        total: 25,
      },
      {
        month: 8,
        type: "borrowing",
        total: 40,
      },
      {
        month: 9,
        type: "borrowing",
        total: 20,
      },
      {
        month: 10,
        type: "borrowing",
        total: 40,
      },
      {
        month: 11,
        type: "borrowing",
        total: 30,
      },
      {
        month: 12,
        type: "borrowing",
        total: 20,
      },
    ],
    count_loan_request_by_loan_reason_type_in_year: [
      {
        loan_reason_type: "reason 1",
        total: 10,
      },
      {
        loan_reason_type: "reason 1",
        total: 5,
      },
      {
        loan_reason_type: "reason 2",
        total: 6,
      },
      {
        loan_reason_type: "reason 2",
        total: 1,
      },
      {
        loan_reason_type: "reason 3",
        total: 2,
      },
    ],
  };

  console.log("result: ", result);
  // console.log('dashboard: ', dashboard);
  // if (!dashboard) {
  //   throw new Response('', {
  //     status: 404,
  //     statusText: 'Not Found',
  //   });
  // }

  return result;
}
