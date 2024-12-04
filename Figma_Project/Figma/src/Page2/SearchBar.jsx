import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Use useNavigate instead of useHistory

function SearchBar({ searchTerm, handleSearchChange, productCount }) {
  const navigate = useNavigate();  // Initialize navigate
  
  const handleBackClick = () => {
    navigate(-1);  // Navigate to the previous page
  };

  return (
    <div className="search-bar-container">
      <button className="back-button" onClick={handleBackClick}>← Back</button>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <p className="product-count">
        {productCount} product{productCount !== 1 ? 's' : ''} found
      </p>
    </div>
  );
}

export default SearchBar;
