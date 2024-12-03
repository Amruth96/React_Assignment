//VerificationCode.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "./VerificationCode.css";

const VerificationCode = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Use React Router's navigate function

  // Handle change from the numeric buttons
  const handleButtonClick = (value) => {
    if (currentIndex < 4) {
      const newCode = [...code];
      newCode[currentIndex] = value;
      setCode(newCode);
      if (currentIndex < 3) setCurrentIndex(currentIndex + 1); // Move to the next box
    }
  };

  // Handle backspace functionality
  const handleDelete = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    const newCode = [...code];
    newCode[currentIndex === 0 ? 0 : currentIndex - 1] = ""; // Clear the previous digit
    setCode(newCode);
  };

  // Handle Submit button click
  const handleSubmit = () => {
    if (code.every((digit) => digit !== "")) {
      navigate("/resetpwd"); // Navigate to Resetpwd.jsx
    } else {
      alert("Please fill all the code boxes.");
    }
  };

  return (
    <div className="verification-container">
      <h1 className="verification-title">Verification Code</h1>
      <p className="verification-subtitle">
        Please type the verification code sent to <strong>prelookstudio@gmail.com</strong>
      </p>
      <div className="verification-inputs">
        {code.map((value, index) => (
          <input
            key={index}
            id={`code-${index}`}
            type="text"
            maxLength="1"
            className="code-box"
            value={value}
            readOnly
          />
        ))}
      </div>
      <div className="number-keypad">
        {[
          { num: 1, text: "" },
          { num: 2, text: "ABC" },
          { num: 3, text: "DEF" },
          { num: 4, text: "GHI" },
          { num: 5, text: "JKL" },
          { num: 6, text: "MNO" },
          { num: 7, text: "PQRS" },
          { num: 8, text: "TUV" },
          { num: 9, text: "WXYZ" },
          { num: "⌫", text: "" },
          { num: 0, text: "" },
        ].map((key, index) => (
          <button
            key={index}
            className={`key-button ${key.num === "⌫" ? "delete-button" : ""}`}
            onClick={() =>
              key.num === "⌫" ? handleDelete() : handleButtonClick(String(key.num))
            }
          >
            <span className="key-number">{key.num}</span>
            {key.text && <span className="key-text">{key.text}</span>}
          </button>
        ))}
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
      <p className="resend-text">
        I don’t receive a code? <button className="resend-button">Please resend</button>
      </p>
    </div>
  );
};

export default VerificationCode;
