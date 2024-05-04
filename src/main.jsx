import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppPages } from "./routes/AppPages";
import LoginPage from "./modules/login/LoginPage";
import AppString from "./config/AppString";
import { Token } from "./config/Constants";

const App = () => {
  return (
    <React.StrictMode>
      {localStorage.getItem(AppString.Token) === Token ? (
        <RouterProvider router={AppPages} />
      ) : (
        <LoginPage />
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
