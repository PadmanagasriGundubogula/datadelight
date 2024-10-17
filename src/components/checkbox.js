import React, { useState } from 'react';
import '../styles/checkbox.css';
import signpage from '../images/homeimg.png';
import { useNavigate } from "react-router-dom";

const CheckBox = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState({
    admin: false,
    student: false,
  });

  const handleRoleChange = (e) => {
    const { name, checked } = e.target;
    setRole((prevRole) => ({
      ...prevRole,
      [name]: checked,
    }));
  };

  const handleLogin = () => {
    if (!role.admin && !role.student) {
      alert('Please select a role');
      return;
    }
    const roleText = role.admin ? 'Admin' : 'User/Student';
    alert(`Logging in as: ${roleText}`);
    navigate("/Login");
  };

  return (
    <div className="app">
      <div className="login-container">
        <div className="header">
          <img src={signpage} alt="miss you" className="logo" />
        </div>
        <h2>EXPLORE US AS</h2>
        <div className="role-selection">
          <label>
            <input
              type="checkbox"
              name="admin"
              checked={role.admin}
              onChange={handleRoleChange}
              aria-label="Admin role"
            />
            Admin
          </label>
          <label>
            <input
              type="checkbox"
              name="student"
              checked={role.student}
              onChange={handleRoleChange}
              aria-label="Student role"
            />
            User/Student
          </label>
        </div>
        <button className="login-btn" onClick={handleLogin} aria-label="Log in button">
          Log In
        </button>
      </div>
    </div>
  );
};

export default CheckBox;