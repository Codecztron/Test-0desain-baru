// src/pages/admin/AdminDashboard.js
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/admin/pagesAdmin/AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      navigate("/login"); // Redirect ke halaman login jika belum login
    }
  }, [navigate]); // Dependensi navigate

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn !== "true") {
    return null; // Atau loading spinner
  }

  return (
    <div>
      <h1>Halaman Admin</h1>
      <p>Ini adalah halaman admin</p>
      <Link to="/">
        <button>Ke Halaman Home</button>
      </Link>
      <button
        onClick={() => {
          localStorage.removeItem("isLoggedIn"); // Logout
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default AdminDashboard;
