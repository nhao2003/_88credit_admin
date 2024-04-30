// class AppRoutes definde string constants for all the routes in the application

export default class AppRoutes {
  static BASE = "/";
  static LOGIN = "login";
  static DASHBOARD = "/";
  static PENDING_POST = "pending-post";
  static APPROVE_DPOST = "approved-post";
  static REJECTED_POST = "rejected-post";
  static VOUCHER = "voucher";
  static POST_REPORTING = "post-reporting";
  static USER_REPORTING = "user-reporting";
  static VERIFY_USER = "verify-user";
  static BLOGS = "blogs";
  static BLOG_DETAIL = "blog/:id";
  static BLOG_CREATE = "blog/create";
  static BLOG_EDIT = "blog/edit/:id";
  static PACKAGE = "package";
  static PENDING_REPORTING = "Pending-reporting";
  static USER = "user";
  static VERIFYCATED_USER = "verifycated-user";
  static PENDING_USER = "pending-user";
  static CONTRACT_TEMPLATE = "contract-template";
  static CONTRACT_TEMPLATE_DETAIL = "contract-template/:id";
  static CONTRACT_TEMPLATE_CREATE = "contract-template/create";
  static CONTRACT_TEMPLATE_EDIT = "contract-template/edit/:id";
}
