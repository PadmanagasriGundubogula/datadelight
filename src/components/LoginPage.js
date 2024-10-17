/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../styles/LoginPage.css';
import  { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const navigate = useNavigate();
    const handleSign = () => {
        navigate("/sign");
      };

    const handleLogin = () => {
        navigate("/mainpage");
      };
    
  return (
    <div className="container">
        {/* Right Side - Welcome Back */}
      <div className="welcome-section" >
        <h1 className="welcome-text">WELCOME BACK</h1>
      </div>
      {/* Left Side - Login Form */}
      <div className="login-section">
        <div className="logo">Login</div>
        <h1 className="explore-text">LET'S EXPLORE</h1>
        <form className="login-form">
          <input type="email" placeholder="Enter email" className="input-field" />
          <input type="password" placeholder="Enter password" className="input-field" />
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forget password?</a>
          </div>
          <p className="community-text">Join the community! <button onClick={ handleSign}>Sign up today.</button></p>
          <button className="login-button" onClick={ handleLogin}>Log In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;