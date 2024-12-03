import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Resetpwd.css'; // Uncomment if you have the CSS file

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [input, setInput] = useState(''); // Keep track of the keypad input
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle the form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset email sent to:', email);
    // Reset the input after submission
    setInput('');
    // Navigate to the Phone Registration page
    navigate('/phonereg');
  };

  // Handle button clicks (for the keypad)
  const handleButtonClick = (num) => {
    setInput((prevInput) => prevInput + num);
  };

  // Handle delete key click
  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Reset Password</h1>
      <p className="instructions">Please enter your email address to request a password reset</p>

      {/* Form for email input */}
      <form onSubmit={handleSubmit} className="reset-form">
        <input
          type="email"
          placeholder="prelookstudio@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-input"
        />
        <button type="submit" className="submit-button">
          SEND NEW PASSWORD
        </button>
      </form>

      {/* Number Keypad */}
      <div className="number-keypad">
        {[
          { num: 1, text: '' },
          { num: 2, text: 'ABC' },
          { num: 3, text: 'DEF' },
          { num: 4, text: 'GHI' },
          { num: 5, text: 'JKL' },
          { num: 6, text: 'MNO' },
          { num: 7, text: 'PQRS' },
          { num: 8, text: 'TUV' },
          { num: 9, text: 'WXYZ' },
          { num: '⌫', text: '' },
          { num: 0, text: '' },
        ].map((key, index) => (
          <button
            key={index}
            className={`key-button ${key.num === '⌫' ? 'delete-button' : ''}`}
            onClick={() =>
              key.num === '⌫' ? handleDelete() : handleButtonClick(String(key.num))
            }
          >
            <span className="key-number">{key.num}</span>
            {key.text && <span className="key-text">{key.text}</span>}
          </button>
        ))}
      </div>

      {/* Display the input from the keypad */}
      <div className="input-display">
        <p>Entered: {input}</p> {/* Show the current keypad input */}
      </div>
      
    </div>
  );
};

export default ResetPassword;
