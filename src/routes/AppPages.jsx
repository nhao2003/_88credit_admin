// class AppPages include createBrowserRouter
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import create from "@ant-design/icons/lib/components/IconFont";

export default class AppPages {
  router = createBrowserRouter([
    {
      path: "/",
      component: App,
    },
  ]);
}
