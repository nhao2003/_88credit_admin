import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import NotFoundSVG from "../../../assets/icons/404-not-found.svg";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px",
        background: "#f5f5f5",
      }}
    >
      <img
        src={NotFoundSVG} // Fixed the syntax error here
        alt="Error Illustration"
        style={{ width: "200px", marginBottom: "20px" }}
      />
      <h1 style={{ color: "#e74c3c" }}>Oops!</h1>
      <p style={{ fontSize: "18px", marginBottom: "10px" }}>
        Xin lỗi, đã xảy ra một lỗi không mong muốn.
      </p>
      <p style={{ fontStyle: "italic", color: "#333" }}>
        {error.statusText || error.message}
      </p>
      <Link to="/" style={{ marginTop: "20px", textDecoration: "none" }}>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#3498db",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Trở về Trang Chủ
        </button>
      </Link>
    </div>
  );
}
