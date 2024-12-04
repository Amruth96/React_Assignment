import React from 'react';
import './Page2.css';

function SearchBar({ searchTerm, handleSearchChange, productCount }) {
  return (
    <div className="search-bar-container">
      <button className="back-button">&#8592; Back</button>
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
