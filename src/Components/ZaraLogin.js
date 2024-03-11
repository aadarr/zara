import React, { useState } from 'react';
import './ZaraLogin.css';
import logo from './images/logo.jpg'
const ZaraLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleForgotPassword = () => {
    setForgotPassword(true);
  };

  return (
    <div className="zara-login">
      <div className="zara-logo">
        <img src={logo} alt="Zara Logo" />
      </div>
      <form>
        <div className="zara-form-group">
          <label htmlFor="email">E-MAIL</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-MAIL"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="zara-form-group">
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="PASSWORD"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">LOG IN</button>
        {!forgotPassword ? (
          <p onClick={handleForgotPassword}>Forgot your password?</p>
        ) : (
          <div className="zara-forgot-password">
            <label htmlFor="email">Enter your email to reset</label>
            <input type="text" placeholder="E-MAIL" />
            <button type="submit">SEND</button>
          </div>
        )}
      </form>
      <div className="zara-footer">
        <p>Need an account? Register</p>
        <p>Help</p>
        <p>Search</p>
      </div>
      <div className="zara-shopping-bag">
        <img src={process.env.PUBLIC_URL + '/images/shopping-bag.png'} alt="Shopping Bag" />
        <span>0</span>
      </div>
    </div>
  );
};

export default ZaraLogin;
