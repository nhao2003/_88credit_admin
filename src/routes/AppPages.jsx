// class AppPages include createBrowserRouter
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../global/error/ErrorPage";
import AppRoutes from "./AppRoutes";
import Root from "../modules/root/Root";
import LoginPage from "../modules/login/LoginPage";
import DashBoard from "../modules/dashboard/screens/DashBoard";
import { loader as dashboardLoader } from "../modules/dashboard/DashBloardLoader";
import {loader as approvedPostLoader} from "../modules/post/ApprovedPostLoader"
import ApprovedPost from "../modules/post/screens/ApprovedPost";
import RejectedPost from "../modules/post/screens/RejectedPost";
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
        useE: approvedPostLoader,
        action: postAction,
      },
      {
        path: "rejected_post",
        element: <RejectedPost />,
        loader: approvedPostLoader,
        action: postAction,
      },
    ],
  },
]);
