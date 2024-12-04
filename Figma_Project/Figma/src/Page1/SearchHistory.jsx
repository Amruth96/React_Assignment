import React from "react";

const SearchHistory = () => {
  const searchHistory = ["Soup", "chips", "nuts", "vegetable", "vegetable"];

  return (
    <section className="search-history">
      <h3>Your search history</h3>
      <div className="history-tags">
        {searchHistory.map((item, index) => (
          <span key={index} className="history-tag">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SearchHistory;
