import React from 'react';
import './Favorites.css';

const Favorites = () => {
  return (
    <div className="favorites-container">
      <div className="favorites-header-container">
        <div className="favorites-header">Favorites</div>
        <div className="profile-icon">
          <img src="./images/picon.jpg" alt="Profile" />
        </div>
      </div>
      <div className="favorites-buttons">
        <button className="favorites-button">Food Items</button>
        <button className="favorites-button">Restaurants</button>
      </div>
      <div className="favorites-content">
        <div className="food-items">
          <div className="food-item">
            <img src="./images/15.jpg" alt="Chicken Hawaiian" />
            <div className="food-details">
              <div className="food-name">Chicken Hawaiian</div>
              <div className="food-description">Chicken, Cheese and pineapple</div>
              <div className="food-price">$12.20</div>
            </div>
          </div>
          <div className="food-item">
            <img src="./images/16.jpg" alt="Red N Hot Pizza" />
            <div className="food-details">
              <div className="food-name">Red N Hot Pizza</div>
              <div className="food-description">Chicken, Chili</div>
              <div className="food-price">$10.35</div>
            </div>
          </div>
        </div>
        <div className="restaurants">
          <div className="restaurant-item">
            <img src="./images/17.jpg" alt="Mediterranean Bowl" />
            <div className="restaurant-details">
              <div className="restaurant-name">Mediterranean Bowl</div>
              <div className="restaurant-price">$8.28</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
