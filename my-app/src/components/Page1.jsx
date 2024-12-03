//Page1.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Page1.css";

function Page1() {
  const backgroundStyle = {
    backgroundImage: "url('/images/img1.jpg')", // Update image path if needed
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div style={backgroundStyle} className="page1-container">
      <button className="page1-skip">Skip</button>

      <div className="page1-content">
        <h1 className="page1-title">
          Welcome to <span>FoodHub</span>
        </h1>
        <p className="page1-subtitle">
          Your favourite foods delivered fast at your door.
        </p>
      </div>

      <div className="page1-signin">
        <div className="signin-divider">
          <span className="line"></span>
          <span className="text">sign up with</span>
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

        <button className="button email">Start with email or phone</button>
      </div>

      <div className="page1-footer">
        <p>
          Already have an account? <Link to="/signup">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Page1;
