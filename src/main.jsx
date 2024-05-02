import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppPages } from "./routes/AppPages";

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={AppPages} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
