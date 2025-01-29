import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://giftly-backend.onrender.com/login", { email, password });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        onLogin({ email: response.data.user.email, role: response.data.user.role }, response.data.token);
        navigate("/products");
      } else {
        alert(response.data.message || "Invalid credentials!");
      }
    } catch (error) {
      alert("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
