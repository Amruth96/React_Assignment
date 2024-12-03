//Page.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Page.css";

function Page() {
  return (
    <div className="page-container">
      <Link to="/page1" className="logo-link">
        <img
          src="./1.jpg" 
          alt="FoodHub Logo"
          className="logo-image"
        />
      </Link>

      <h1 className="page-title">FOOD HUB</h1>
    </div>
  );
}

export default Page;
