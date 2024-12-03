import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();  // Initialize useNavigate hook

  // Handler for checkout button click
  const handleCheckout = () => {
    navigate('/myorder');  // Navigate to MyOrder page
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <button className="back-button">
          <i className="fas fa-chevron-left"></i>
        </button>
        <h1>Cart</h1>
      </div>
      <div className="cart-items">
        <div className="cart-item">
          <div className="item-image">
            <img src="./images/5.jpg" alt="Red n hot pizza" />
          </div>
          <div className="item-details">
            <h3>Red n hot pizza</h3>
            <p>Spicy chicken, beef</p>
            <div className="item-actions">
              <button className="remove-button">-</button>
              <span className="item-count">02</span>
              <button className="add-button">+</button>
            </div>
            <div className="item-price">$15.30</div>
          </div>
        </div>
        <div className="cart-item">
          <div className="item-image">
            <img src="./images/6.jpg" alt="Greek salad" />
          </div>
          <div className="item-details">
            <h3>Greek salad</h3>
            <p>with baked salmon</p>
            <div className="item-actions">
              <button className="remove-button">-</button>
              <span className="item-count">02</span>
              <button className="add-button">+</button>
            </div>
            <div className="item-price">$12.00</div>
          </div>
        </div>
      </div>
      <div className="cart-summary">
        <div className="summary-item">
          <span>Subtotal</span>
          <span>$27.30 USD</span>
        </div>
        <div className="summary-item">
          <span>Tax and Fees</span>
          <span>$5.30 USD</span>
        </div>
        <div className="summary-item">
          <span>Delivery</span>
          <span>$1.00 USD</span>
        </div>
        <div className="summary-total">
          <span>Total (2 items)</span>
          <span>$33.60 USD</span>
        </div>
        <button className="checkout-button" onClick={handleCheckout}>CHECKOUT</button> {/* Updated to call handleCheckout */}
      </div>
    </div>
  );
};

export default Cart;
