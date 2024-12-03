import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Review.module.css";

const reviews = [
  {
    name: "Alyce Lambo",
    date: "25/06/2020",
    rating: 5.0,
    avatar: "./images/12.jpg",
    review: "Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.",
  },
  {
    name: "Gonela Solom",
    date: "22/06/2020",
    rating: 4.5,
    avatar: "./images/13.jpg",
    review: "Been a life saver for keeping our sanity during the pandemic, although they could improve some of their UI and how they handle specials as it often is unclear how to use them or everything is sold out so fast it feels a bit bait and switch. Still I'd be stir crazy and losing track of days without so...",
  },
  {
    name: "Brian C",
    date: "21/06/2020",
    rating: 2.5,
    avatar: "./images/14.jpg",
    review: "Got an intro offer of 50% off first order that did not work..... I have scaled the app to find a contact us button but only a spend with us button available.",
  },
];

const Review = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleBackClick = () => {
    navigate("/homescreen"); // Navigate to the Homescreen
  };

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={handleBackClick}>
          ←
        </button>
        <h1 className={styles.heading}>Reviews</h1>
      </div>
      <div className={styles.reviewBox}>
        <div className={styles.textAreaContainer}>
          <img
            src="./images/picon.jpg"
            alt="Profile"
            className={styles.profileIcon}
          />
          <textarea
            className={styles.textArea}
            placeholder="Write your review..."
          ></textarea>
        </div>
      </div>
      {reviews.map((item, index) => (
        <div key={index} className={styles.reviewCard}>
          <img
            src={item.avatar}
            alt={item.name}
            className={styles.avatar}
          />
          <div className={styles.content}>
            <div className={styles.headerInfo}>
              <h3 className={styles.name}>{item.name}</h3>
              <span className={styles.date}>{item.date}</span>
              <span className={styles.rating}>{item.rating}</span>
            </div>
            <p className={styles.review}>{item.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
