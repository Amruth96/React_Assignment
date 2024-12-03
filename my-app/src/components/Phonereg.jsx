import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Correct import
import './Phonereg.css';

const Phonereg = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [phoneNumber, setPhoneNumber] = useState('');

  const countries = [
    { code: 'US', name: 'United States', dialCode: '+1' },
    { code: 'IN', name: 'India', dialCode: '+91' },
    { code: 'UK', name: 'United Kingdom', dialCode: '+44' },
    { code: 'CA', name: 'Canada', dialCode: '+1' },
    { code: 'AU', name: 'Australia', dialCode: '+61' },
  ];

  const handleSendClick = () => {
    if (!phoneNumber) {
      alert('Please enter a phone number!');
      return;
    }
    console.log(`Country: ${selectedCountry}, Phone: ${phoneNumber}`);
    navigate('/page3');  // Correct navigation to Page3 (Login Page)
  };

  return (
    <div className="phonereg-container">
      <button className="back-button">&lt;</button>
      <div className="form-container">
        <h2>Registration</h2>
        <p>Enter your phone number to verify your account</p>
        <div className="phone-input-container">
          {/* Country Dropdown */}
          <select
            className="country-dropdown"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name} ({country.dialCode})
              </option>
            ))}
          </select>
          {/* Phone Number Input */}
          <input
            type="text"
            className="phone-input"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        {/* Send Button */}
        <button className="send-button" onClick={handleSendClick}>
          SEND
        </button>
      </div>
    </div>
  );
};

export default Phonereg;
