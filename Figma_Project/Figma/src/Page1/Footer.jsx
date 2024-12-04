// Footer.jsx

import React from "react";
import { FaHome, FaSearch, FaShoppingCart, FaUser, FaClipboardList } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-item">
        <FaHome className="footer-icon" />
        <span className="footer-text">Home</span>
      </div>
      <div className="footer-item active">
        <FaSearch className="footer-icon" />
        <span className="footer-text">Search</span>
      </div>
      <div className="footer-item">
        <FaClipboardList className="footer-icon" />
        <span className="footer-text">Orders</span>
      </div>
      <div className="footer-item">
        <FaShoppingCart className="footer-icon" />
        <span className="footer-text">Cart</span>
      </div>
      <div className="footer-item">
        <FaUser className="footer-icon" />
        <span className="footer-text">Profile</span>
      </div>
    </footer>
  );
};

export default Footer;
