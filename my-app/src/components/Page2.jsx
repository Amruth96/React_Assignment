// Page2.jsx (Sign-up page)
import React from "react";
import { Link } from "react-router-dom";
import "./Page2.css";

const Page2 = () => {
  return (
    <div className="signup-card">
      <form className="signup-form">
        <h1>Sign Up</h1>
        <div className="form-group">
          <label htmlFor="full-name">Full name</label>
          <input type="text" id="full-name" placeholder="Full name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="E-mail" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <input type="password" id="password" placeholder="Password" />
            <span className="show-password"></span>
          </div>
        </div>
        <button type="submit" className="signup-button">SIGN UP</button>
        <p className="login-prompt">
          Already have an account? 
          {/* Navigate to Page3 (Login Page) */}
          <Link to="/page3">Login</Link> 
        </p>
      </form>
      <div className="divider">
        <span className="line"></span>
        <span className="text">Sign up with</span>
        <span className="line"></span>
      </div>
      <div className="social-buttons">
        <button className="button facebook">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
            alt="Facebook Logo"
            className="social-logo"
          />
          Facebook
        </button>
        <button className="button google">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
            alt="Google Logo"
            className="social-logo"
          />
          Google
        </button>
      </div>
    </div>
  );
};

export default Page2;
