// class AppPages include createBrowserRouter
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../global/error/ErrorPage";
import AppRoutes from "./AppRoutes";
import Root from "../modules/root/Root";
import LoginPage from "../modules/login/LoginPage";
import DashBoard from "../modules/dashboard/screens/DashBoard";
import { loader as dashboardLoader } from "../modules/dashboard/DashBloardLoader";
import ApprovedPost, {
  loader as approvedPostLoader,
} from "../modules/post/screens/ApprovedPost";
import { action as postAction } from "../modules/post/action";

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
    ],
  },
]);
