// src/pages/admin/login/login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/admin/login/login.css"; // Sesuaikan path

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(process.env.WEB_SIE1_ADMIN_USERNAME);
    console.log(process.env.WEB_SIE1_ADMIN_PASSWORD);
    // Cek admin
    if (
      username === process.env.WEB_SIE1_ADMIN_USERNAME &&
      password === process.env.WEB_SIE1_ADMIN_PASSWORD
    ) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userType", "admin");
      navigate(process.env.WEB_SIE1_ADMIN_ROUTE);
      return;
    }

    // Cek user dev
    if (
      username === process.env.WEB_SIE1_DEFAULT_ACCOUNT_USERNAME &&
      password === process.env.WEB_SIE1_DEFAULT_ACCOUNT_PASSWORD
    ) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userType", "dev");
      navigate(process.env.WEB_SIE1_ADMIN_ROUTE); // Redirect ke home untuk user default
      return;
    }

    setError("Username atau password salah.");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>{" "}
        {/* Judul Login yang lebih umum */}
        {error && <p className="login-error">{error}</p>}
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <Link to="/" className="home-button-link">
            <button type="button" className="home-button">
              Ke Halaman Home
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
