import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate
import "./Fooddetails.css";

const Fooddetails = () => {
  const [quantity, setQuantity] = useState(2);
  const navigate = useNavigate(); // Initializing navigate

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Function to navigate to Cart page
  const handleAddToCart = () => {
    // Logic to save the item to the cart can be added here
    navigate("/cart"); // Navigate to the Cart page
  };

  // Function to navigate to Favorites page
  const handleNavigateToFavorites = () => {
    navigate("/favorites"); // Navigate to the Favorites page
  };

  return (
    <div className="fooddetails-container">
      {/* Header */}
      <div className="fooddetails-header">
        <button
          className="favorite-button"
          onClick={handleNavigateToFavorites}
        >
          ❤
        </button>
        <img
          src="./images/4.jpg"
          alt="Ground Beef Tacos"
          className="food-image"
        />
      </div>

      {/* Content */}
      <div className="fooddetails-content">
        <h1>Ground Beef Tacos</h1>
        <div className="rating-section">
          <span className="rating">⭐ 4.5 (30+)</span>
          <button className="see-reviews">See Review</button>
        </div>
        <div className="price-section">
          <h2>$9.50</h2>
          <div className="quantity-control">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity < 10 ? `0${quantity}` : quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
        </div>
        <p className="description">
          Brown the beef better. Lean ground beef – I like to use 85% lean
          angus. Garlic – use fresh chopped. Spices – chili powder, cumin, onion
          powder.
        </p>

        {/* Add-ons */}
        <h3>Choice of Add On</h3>
        <div className="addons">
          <div className="addon">
            <span>Pepper Julienned</span>
            <span className="addon-price">+$2.30</span>
            <input type="radio" name="addon" />
          </div>
          <div className="addon">
            <span>Baby Spinach</span>
            <span className="addon-price">+$4.70</span>
            <input type="radio" name="addon" />
          </div>
          <div className="addon">
            <span>Mushroom</span>
            <span className="addon-price">+$2.50</span>
            <input type="radio" name="addon" />
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Fooddetails;
