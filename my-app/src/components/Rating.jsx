import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import styles from "./Rating.module.css";

const Rating = () => {
  const [rating, setRating] = useState(4); // Default rating
  const [review, setReview] = useState("");
  const navigate = useNavigate(); // Initialize navigate function

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Rating: ${rating}\nReview: ${review}`);
    
    // Navigate to the Review page after form submission
    navigate("/review");  // Change to the correct path for your Review page
  };

  return (
    <div className={styles.ratingContainer}>
      <div className={styles.header}>
        <img className={styles.image} src="./images/10.jpg" alt="Pizza" />
        <div className={styles.restaurantInfo}>
          <div className={styles.logo}>
            <img src="./images/11.jpg" alt="Pizza Hut" />
          </div>
          <h3>Pizza Hut</h3>
          <p>4102 Pretty View Lanenda</p>
          <p className={styles.orderStatus}>• Order Delivered</p>
        </div>
      </div>
      <div className={styles.ratingSection}>
        <p className={styles.ratingPrompt}>Please Rate Delivery Service</p>
        <p className={styles.ratingText}>{rating >= 4 ? "Good" : "Average"}</p>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={`${styles.star} ${value <= rating ? styles.selected : ""}`}
              onClick={() => handleRating(value)}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      <form className={styles.reviewForm} onSubmit={handleSubmit}>
        <textarea
          className={styles.textArea}
          placeholder="Write review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button className={styles.submitButton} type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Rating;
