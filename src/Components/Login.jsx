import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Logsign.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending login data:", { email, password });
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      }, {
        method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
      });
  
      const token = response.data.token; // Assuming backend sends a token
      const userId = response.data.id;
      
  console.log(token);
  console.log(userId)
      // Save the token and userId in localStorage
      localStorage.setItem("authToken", token);
      localStorage.setItem("userId", userId);
  
      alert("Login successful");
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage(error.response?.data || "Invalid credentials");
    }
  };
  

  return (
    <div className="slbody">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;
