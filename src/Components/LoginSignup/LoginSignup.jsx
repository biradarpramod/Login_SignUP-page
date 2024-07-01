

import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/signup', { username, email, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? <div></div> : <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>

      {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}

      <div className="submit-container">
        <div className={`submit ${action === "Login" ? "gray" : ""}`} onClick={() => { setAction("Sign Up"); handleSignup(); }}>Sign Up</div>
        <div className={`submit ${action === "Sign Up" ? "gray" : ""}`} onClick={() => { setAction("Login"); handleLogin(); }}>Login</div>
      </div>
    </div>
  );
}

export default LoginSignup;
