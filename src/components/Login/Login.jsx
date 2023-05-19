import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import logo from "./logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
   
    navigate("/dashboard");
  };

  return (
    <div className="container">
    <div className="image-container">
    <img src={logo} alt="Imagem de fundo" />
    </div>
      <div className="login-container">
         <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="form-control"

              required
            />
            <div className="link-container">
    <input type="checkbox" /><Link className="remember" to="/forget">Remember</Link>
    <Link to="/forget-password">Forgot password</Link>
  </div>

          </div>
          <div className="btn-text-center">
            <button type="submit" className="anm">
              SUBMIT
            </button>
          </div>
          <p className="create">
          <Link to="/register">Create account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
