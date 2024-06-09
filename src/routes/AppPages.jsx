// class AppPages include createBrowserRouter
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../global/error/ErrorPage";
import AppRoutes from "./AppRoutes";
import Root from "../modules/root/Root";
import LoginPage from "../modules/login/LoginPage";
import DashBoard from "../modules/dashboard/screens/DashBoard";
import { loader as dashboardLoader } from "../modules/dashboard/DashBloardLoader";
import { loader as approvedPostLoader } from "../modules/post/ApprovedPostLoader";
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
        loader: approvedPostLoader,
        action: postAction,
      },
      {
        path: "pending_post",
        element: <PendingPost />,
        loader: approvedPostLoader,
        action: postAction,
      },
      {
        path: "blogs",
        element: <Blog />,
        loader: blogLoader,
        // action: blogAction,
      },
      {
        path: "blogs/:id",
        element: <BlogDetail />,
        loader: blogDetailLoader,
        // action: blogAction,
      },
      // {
      //   path: "blogs/add",
      //   element: <AddNewPage />,
      //   action: blogAction,
      // },
      // {
      //   path: "blogs/edit/:id",
      //   element: <EditBlog />,
      //   loader: EditBlogLoader,
      //   action: blogAction,
      // },
    ],
  },
]);
