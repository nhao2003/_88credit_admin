import { DashboardRepo } from "../../repository/DashBoardRepo";

export async function loader() {
  const result = await DashboardRepo();
  const dashboard = {
    top_10_users_have_most_posts: result.top_10_users_have_most_posts,
    countUserPerStatus: result.count_user_per_status,
    countPostByStatus: result.count_post_by_status,
    countReportPerStatus: [
      {
        status: "pending",
        count: 1,
      },
      {
        status: "resolved",
        count: 2,
      },
    ],
    countPostByTypeInMonthOfYear: result.count_post_by_type_in_month_of_year,
    countLoanRequestByLoanReasonTypeInYear:
      result.count_loan_request_by_loan_reason_type_in_year,
    countSubscriptionPackage: [
      {
        package_id: 1,
        package_name: "Gói 1",
        count: 10,
      },
      {
        package_id: 2,
        package_name: "Gói 2",
        count: 20,
      },
      {
        package_id: 3,
        package_name: "Gói 3",
        count: 30,
      },
      {
        package_id: 4,
        package_name: "Gói 4",
        count: 40,
      },
      {
        package_id: 5,
        package_name: "Gói 5",
        count: 50,
      },
    ],
    countBlog: 10,
    //countSubscriptionPackage: 10,
  };
  return { dashboard };
}
