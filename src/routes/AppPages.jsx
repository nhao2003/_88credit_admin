// class AppPages include createBrowserRouter
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../global/error/ErrorPage";
import AppRoutes from "./AppRoutes";
import Root from "../modules/root/Root";
import LoginPage from "../modules/login/LoginPage";
import DashBoard from "../modules/dashboard/screens/DashBoard";
import { loader as dashboardLoader } from "../modules/dashboard/DashBloardLoader";

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
    ],
  },
]);
