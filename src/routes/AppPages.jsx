// class AppPages include createBrowserRouter
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../global/error/ErrorPage";
import AppRoutes from "./AppRoutes";
import Root from "../modules/root/Root";
import LoginPage from "../modules/login/LoginPage";
import DashBoard from "../modules/dashboard/screens/DashBoard";
import { loader as dashboardLoader } from "../modules/dashboard/DashBloardLoader";
import { loader as approvedPostLoader } from "../modules/post/screens/ApprovedPost";
import { loader as pendingPostLoader } from "../modules/post/screens/PendingPost";
import { loader as rejectedPostLoader } from "../modules/post/screens/RejectedPost";
import ApprovedPost from "../modules/post/screens/ApprovedPost";
import RejectedPost from "../modules/post/screens/RejectedPost";
import PendingPost from "../modules/post/screens/PendingPost";
import { action as postAction } from "../modules/post/action";
import Blog from "../modules/blog/screens/Blog";
import BlogDetail from "../modules/blog/screens/BlogDetail";
import AddNewPage from "../modules/blog/screens/AddNewPage";
import EditBlog from "../modules/blog/screens/BlogEdit";
import { loader as blogLoader } from "../modules/blog/screens/Blog";
import { loader as blogDetailLoader } from "../modules/blog/screens/BlogDetail";
import { loader as EditBlogLoader } from "../modules/blog/screens/BlogEdit";
import { action as blogAction } from "../modules/blog/action";
import PendingReporting from "../modules/reporting/screens/PostReporting";
import UserReporting from "../modules/reporting/screens/UserReporting";
import { loader as pendingReportingLoader } from "../modules/reporting/screens/PostReporting";
import { loader as userReportingLoader } from "../modules/reporting/screens/UserReporting";
import { action as reportingAction } from "../modules/reporting/action";
import User from "../modules/user/screens/User";
import VertificatedUser from "../modules/user/screens/VertificatedUser";
import PendingUser from "../modules/user/screens/PendingUser";
import { loader as userLoader } from "../modules/user/screens/User";
import { action as userAction } from "../modules/user/action";

export const AppPages = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: AppRoutes.LOGIN,
        element: <LoginPage />,
      },
      {
        index: true,
        path: AppRoutes.DASHBOARD,
        element: <DashBoard />,
        loader: dashboardLoader,
      },
      {
        path: "approved_post",
        element: <ApprovedPost />,
        loader: approvedPostLoader,
        action: postAction,
      },
      {
        path: "rejected_post",
        element: <RejectedPost />,
        loader: rejectedPostLoader,
        action: postAction,
      },
      {
        path: "pending_post",
        element: <PendingPost />,
        loader: pendingPostLoader,
        action: postAction,
      },
      {
        path: "blogs",
        element: <Blog />,
        loader: blogLoader,
        action: blogAction,
      },
      {
        path: "blogs/:id",
        element: <BlogDetail />,
        loader: blogDetailLoader,
        action: blogAction,
      },
      {
        path: "blogs/add",
        element: <AddNewPage />,
        action: blogAction,
      },
      {
        path: "blogs/edit/:id",
        element: <EditBlog />,
        loader: EditBlogLoader,
        action: blogAction,
      },
      {
        path: "post_reporting",
        element: <PendingReporting />,
        loader: pendingReportingLoader,
        action: reportingAction,
      },
      {
        path: "user_reporting",
        element: <UserReporting />,
        loader: userReportingLoader,
        action: reportingAction,
      },

      {
        path: "user",
        element: <User />,
        loader: userLoader,
        action: userAction,
      },
      {
        path: "verificated_user",
        element: <VertificatedUser />,
      },
      {
        path: "pending_user",
        element: <PendingUser />,
      },
    ],
  },
]);
