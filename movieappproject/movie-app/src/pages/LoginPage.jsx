import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setIsLoggedIn] = useState(false);
  
  const handlelogin = () => {
    const storeduser = JSON.parse(localStorage.getItem("user"));
    
    if (!storeduser) {
      alert("No user found. Please signup first.");
      return;
    }  
  
    if (email === storeduser.email && password === storeduser.password) {
      alert("Login successful");
      localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button onClick={handlelogin}>Login</button>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
