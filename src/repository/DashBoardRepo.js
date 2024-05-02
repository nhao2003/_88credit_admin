import ApiService from "../services/ApiService";

export async function DashboardRepo() {
  // const result = (await ApiService.get("statistic")).result;
  const result = {
    top_10_users_have_most_posts: [
      {
        user_id: 1,
        user_name: "User 1",
        count: 10,
      },
      {
        user_id: 2,
        user_name: "User 2",
        count: 20,
      },
      {
        user_id: 3,
        user_name: "User 3",
        count: 30,
      },
      {
        user_id: 4,
        user_name: "User 4",
        count: 40,
      },
      {
        user_id: 5,
        user_name: "User 5",
        count: 50,
      },
      {
        user_id: 6,
        user_name: "User 6",
        count: 60,
      },
      {
        user_id: 7,
        user_name: "User 7",
        count: 70,
      },
      {
        user_id: 8,
        user_name: "User 8",
        count: 80,
      },
      {
        user_id: 9,
        user_name: "User 9",
        count: 90,
      },
      {
        user_id: 10,
        user_name: "User 10",
        count: 100,
      },
    ],
    count_user_per_status: [
      {
        status: "active",
        count: 10,
      },
      {
        status: "inactive",
        count: 20,
      },
    ],
    count_post_by_status: [
      {
        status: "active",
        count: 10,
      },
      {
        status: "inactive",
        count: 20,
      },
    ],
    count_post_by_type_in_month_of_year: [
      {
        month: 1,
        type: "type 1",
        count: 10,
      },
      {
        month: 2,
        type: "type 2",
        count: 20,
      },
      {
        month: 3,
        type: "type 3",
        count: 30,
      },
      {
        month: 4,
        type: "type 4",
        count: 40,
      },
      {
        month: 5,
        type: "type 5",
        count: 50,
      },
      {
        month: 6,
        type: "type 6",
        count: 60,
      },
      {
        month: 7,
        type: "type 7",
        count: 70,
      },
      {
        month: 8,
        type: "type 8",
        count: 80,
      },
      {
        month: 9,
        type: "type 9",
        count: 90,
      },
      {
        month: 10,
        type: "type 10",
        count: 100,
      },
      {
        month: 11,
        type: "type 11",
        count: 110,
      },
      {
        month: 12,
        type: "type 12",
        count: 120,
      },
    ],
    count_loan_request_by_loan_reason_type_in_year: [
      {
        type: "type 1",
        count: 10,
      },
      {
        type: "type 2",
        count: 20,
      },
      {
        type: "type 3",
        count: 30,
      },
      {
        type: "type 4",
        count: 40,
      },
      {
        type: "type 5",
        count: 50,
      },
      {
        type: "type 6",
        count: 60,
      },
      {
        type: "type 7",
        count: 70,
      },
      {
        type: "type 8",
        count: 80,
      },
      {
        type: "type 9",
        count: 90,
      },
      {
        type: "type 10",
        count: 100,
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
