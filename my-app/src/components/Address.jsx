import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import './Address.css';

const Address = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle save and navigate to MyOrder page
  const handleSave = () => {
    navigate('/myorder'); // Navigate to MyOrder page
  };

  return (
    <div className="address-container">
      <div className="address-header">
        <button className="back-button">
          <i className="fas fa-chevron-left"></i>
        </button>
        <h1 className="address-title">Add new address</h1>
      </div>
      <div className="address-form">
        <div className="form-field">
          <label htmlFor="fullName" className="form-label">Full name</label>
          <input type="text" id="fullName" placeholder="Full name" className="form-input" defaultValue="Arlene McCoy" />
        </div>
        <div className="form-field">
          <label htmlFor="mobileNumber" className="form-label">Mobile number</label>
          <input type="tel" id="mobileNumber" placeholder="Mobile number" className="form-input" defaultValue="018-49862746" />
        </div>
        <div className="dropdown-container">
          <label htmlFor="state" className="form-label">State</label>
          <button className="dropdown-button" id="state">
            Select State
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="dropdown-container">
          <label htmlFor="city" className="form-label">City</label>
          <button className="dropdown-button" id="city">
            Select City
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="form-field">
          <label htmlFor="street" className="form-label">Street (Include house number)</label>
          <input type="text" id="street" placeholder="Street (Include house number)" className="form-input" />
        </div>
        <button className="save-button" onClick={handleSave}>SAVE</button> {/* Add onClick handler */}
      </div>
    </div>
  );
};

export default Address;
