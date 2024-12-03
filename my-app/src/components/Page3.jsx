import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Page3.css';

function Page3() {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here (e.g., validation, authentication)
    navigate('/homescreen'); // Navigate to Homescreen after successful login
  };

  return (
    <div className="login-card">
      {/* Login Title */}
      <h1 className="login-title">Login</h1>

      {/* Login Form */}
      <form className="login-form" onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Your email or phone"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
            />
            <span className="show-password"></span>
          </div>
        </div>

        {/* Forgot Password Link */}
        <div className="forgot-password">
          <Link to="/verification">Forgot password?</Link>
        </div>

        {/* Login Button */}
        <button type="submit" className="login-button">LOGIN</button>
      </form>

      {/* Sign Up Link */}
      <p className="signup-link">
        Don’t have an account? <Link to="/signup">Sign Up</Link>
      </p>

      {/* Divider with text */}
      <div className="divider">
        <span className="line"></span>
        <span className="text">Sign up with</span>
        <span className="line"></span>
      </div>

      {/* Social Buttons */}
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
}

export default Page3;
