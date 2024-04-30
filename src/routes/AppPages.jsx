// class AppPages include createBrowserRouter
import React, { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import create from "@ant-design/icons/lib/components/IconFont";
import ErrorPage from "../global/error/error-page";
import AppRoutes from "./AppRoutes";
import Root from "../modules/root/Root";
import LoginPage from "../modules/login/LoginPage";
import DashBoard from "../modules/dashboard/screens/DashBoard";

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
      },
    ],
  },
]);
