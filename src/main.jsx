import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppPages } from "./routes/AppPages";
import LoginPage from "./modules/login/LoginPage";

const App = () => {
  return (
    <React.StrictMode>
      {localStorage.getItem("token") === "1234567890" ? (
        <RouterProvider router={AppPages} />
      ) : (
        <LoginPage />
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
