import React from 'react';
import '../styles/SignPage.css';

const SignPage = () => {
  return (
    <div className="container">
        {/* Right Side - Welcome Back */}
      <div className="welcome-section">
        <h1 className="welcome-text">WELCOME BACK</h1>
      </div>
      {/* Left Side - Login Form */}
      <div className="login-section">
        <div className="logo">Signup</div>
        <h1 className="explore-text">LET'S EXPLORE</h1>
        <form className="login-form">
        <input type="username" placeholder="your name" className="input-field" />
          <input type="email" placeholder="Enter email" className="input-field" />
          <input type="password" placeholder="Enter password" className="input-field" />
          <input type="pasword" placeholder="confirm pasword" className="input-field" />
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forget password?</a>
          </div>
          <button className="login-button">Sign-up</button>
        </form>
      </div>
    </div>
  );
}

export default SignPage;