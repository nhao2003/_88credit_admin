import ApiService from "../../services/ApiService";

export async function loader() {
  const res = await ApiService.get("dashboard");
  const result = res.data;
  const dashboard = {
    top_10_users_have_most_posts: result.topUserHasMostPost,
    countUserPerStatus: result.numberOfUsersPerStatus,
    countPostByStatus: result.numberOfPostPerstatus,
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
    countPostByTypeInMonthOfYear: result.countPostByTypeInMonthOfYear,
    countLoanRequestByLoanReasonTypeInYear: [
      {
        loan_reason_type: "carBuying",
        total: 10,
      },
      {
        loan_reason_type: "education",
        total: 5,
      },
      {
        loan_reason_type: "travel",
        total: 6,
      },
      {
        loan_reason_type: "shopping",
        total: 1,
      },
      {
        loan_reason_type: "medical",
        total: 2,
      },
    ],
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
    countBlog: result.numberOfBlog,
    //countSubscriptionPackage: 10,
  };
  return { dashboard };
}
