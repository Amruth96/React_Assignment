import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import './MyOrder.css';

const MyOrder = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [viewHistory, setViewHistory] = useState(false); // State to toggle between upcoming and history

  // Function to toggle between upcoming and history views
  const handleViewChange = (view) => {
    setViewHistory(view === 'history');
  };

  // Function to handle profile icon click and navigate to Profile page
  const handleProfileClick = () => {
    navigate('/profile'); // Navigate to Profile page
  };

  // Function to handle the "Rate" button click and navigate to Rating page
  const handleRateClick = () => {
    navigate('/rating'); // Navigate to Rating page
  };

  return (
    <div className="my-order-container">
      <div className="order-header">
        {/* Profile Icon */}
        <div className="profile-icon" onClick={handleProfileClick}>
          <img src="./images/picon.jpg" alt="Profile" />
        </div>
        
        {/* Heading, Upcoming, and History buttons */}
        <div className="header-content">
          <h1 className="order-title">{viewHistory ? 'History' : 'My Orders'}</h1>
          <div className="nav-buttons">
            <button
              className={`nav-button ${!viewHistory ? 'active' : ''}`}
              onClick={() => handleViewChange('upcoming')}
            >
              Upcoming
            </button>
            <button
              className={`nav-button ${viewHistory ? 'active' : ''}`}
              onClick={() => handleViewChange('history')}
            >
              History
            </button>
          </div>
        </div>
      </div>

      <div className="order-details">
        {/* Upcoming Orders */}
        {!viewHistory && (
          <div className="order-item">
            <div className="order-image">
              <img src="./images/7.jpg" alt="Starbuck" />
            </div>
            <div className="order-info">
              <h3 className="order-name">Starbuck</h3>
              <p className="order-id">#264100</p>
              <p className="order-status">Food on the way</p>
              <div className="order-actions">
                <button className="cancel-button">Cancel</button>
                <button className="track-button">Track Order</button>
              </div>
            </div>
            <div className="order-time">25 min</div>
          </div>
        )}

        {/* History Orders */}
        {viewHistory && (
          <>
            <div className="order-item">
              <div className="order-image">
                <img src="./images/8.jpg" alt="Jimmy John's" />
              </div>
              <div className="order-info">
                <h3 className="order-name">Jimmy John's</h3>
                <p className="order-id">#17.10</p>
                <p className="order-status">Order Delivered</p>
                <div className="order-actions">
                  <button className="reorder-button">Re-Order</button>
                  <button className="rate-button" onClick={handleRateClick}>Rate</button> {/* Rate button */}
                </div>
              </div>
              <div className="order-time">20 Jun, 10:30</div>
            </div>
            <div className="order-item">
              <div className="order-image">
                <img src="./images/9.jpg" alt="Subway" />
              </div>
              <div className="order-info">
                <h3 className="order-name">Subway</h3>
                <p className="order-id">#20.50</p>
                <p className="order-status">Order Delivered</p>
                <div className="order-actions">
                  <button className="reorder-button">Re-Order</button>
                  <button className="rate-button" onClick={handleRateClick}>Rate</button> {/* Rate button */}
                </div>
              </div>
              <div className="order-time">19 Jun, 11:50</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
