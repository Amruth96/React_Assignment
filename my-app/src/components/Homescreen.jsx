import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homescreen.css";

function Homescreen() {
  const navigate = useNavigate();

  const handleNavigateToFoodDetails = () => {
    navigate("/fooddetails");
  };

  return (
    <div className="homescreen-container">
      {/* Header */}
      <header className="homescreen-header">
        <div className="delivery-address">
          <p>Deliver to</p>
          <h3>4102 Pretty View Lane</h3>
        </div>
        <div className="profile-icon">
          <img
            src="./images/picon.jpg"
            alt="Profile"
            className="profile-picture"
          />
        </div>
      </header>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Find food or restaurant..." />
        <button className="filter-button">
          <img
            src="https://img.icons8.com/material-outlined/24/filter.png"
            alt="Filter"
          />
        </button>
      </div>

      {/* Food Categories */}
      <div className="food-categories">
        {[
          { name: "Burger", imgSrc: "./images/burger.jpg" },
          { name: "Donat", imgSrc: "./images/donat.jpg" },
          { name: "Pizza", imgSrc: "./images/pizza.jpg" },
          { name: "Mexican", imgSrc: "./images/mexican.jpg" },
          { name: "Asian", imgSrc: "./images/asian.jpg" },
        ].map((item, index) => (
          <div key={index} className="category-item">
            <img src={item.imgSrc} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      {/* Featured Restaurants */}
      <div className="featured-section">
        <div className="section-header">
          <h3>Featured Restaurants</h3>
          <p>View All</p>
        </div>
        <div className="restaurant-cards">
          {/* McDonald's Card */}
          <div
            className="restaurant-card"
            onClick={handleNavigateToFoodDetails}
          >
            <img
              src="./images/mcD.jpg"
              alt="McDonald's"
              className="restaurant-image"
            />
            <div className="restaurant-info">
              <h4>McDonald's</h4>
              <p>Free delivery • 10-15 mins</p>
              <p className="tags">Burger • Chicken • Fast Food</p>
            </div>
          </div>
          {/* Starbucks Card */}
          <div className="restaurant-card">
            <img
              src="./images/starbucks.jpg"
              alt="Starbucks"
              className="restaurant-image"
            />
            <div className="restaurant-info">
              <h4>Starbucks</h4>
              <p>Free delivery • 10-20 mins</p>
              <p className="tags">Coffee • Breakfast • Drinks</p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Items */}
      <div className="popular-section">
        <h3>Popular Items</h3>
        <div className="popular-items">
          {[
            { name: "Tuna Fish", price: "$5.50", imgSrc: "./images/1.jpg" },
            { name: "Cheese Roasted Meat", price: "$7.25", imgSrc: "./images/2.jpg" },
            { name: "Garlic Bread", price: "$2.75", imgSrc: "./images/3.jpg" },
          ].map((item, index) => (
            <div key={index} className="popular-card">
              <img src={item.imgSrc} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="homescreen-footer">
        <button className="footer-icon active">
          <img
            src="https://img.icons8.com/material-outlined/24/home.png"
            alt="Home"
          />
        </button>
        <button className="footer-icon">
          <img
            src="https://img.icons8.com/material-outlined/24/search.png"
            alt="Search"
          />
        </button>
        <button className="footer-icon">
          <img
            src="https://img.icons8.com/material-outlined/24/shopping-cart.png"
            alt="Cart"
          />
        </button>
        <button className="footer-icon">
          <img
            src="https://img.icons8.com/material-outlined/24/user.png"
            alt="Profile"
          />
        </button>
      </footer>
    </div>
  );
}

export default Homescreen;
