import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    console.log("Email:", email);
    console.log("Password:", password);
    // Redirecionar para outra página, exibir uma mensagem de boas-vindas, etc.
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="form-control"
              placeholder="Seu email"
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
              placeholder="Sua senha"
              required
            />
            <p className="forgot">
              <Link to="/forget-password">Esqueceu a senha?</Link>
            </p>
          </div>
          <div className="btn-text-center">
            <button type="submit" className="anm">
              Entrar
            </button>
          </div>
          <p className="sign">
            Não tem uma conta? <Link to="/register">Cadastre-se</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
