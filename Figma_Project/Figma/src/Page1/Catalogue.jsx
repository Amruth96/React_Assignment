    import React from "react";

    const Catalogue = ({ items }) => {
    return (
        <div className="categories">
        <h3>Browse by category</h3>
        <div className="category-grid">
            {items.length > 0 ? (
            items.map((item) => (
                <div className="category-card" key={item.id}>
                <img
                    src={item.image} //{require(`${item.image}`)}
                    alt={item.name}
                    className="category-image"
                />
                <span className="category-name">{item.name}</span>
                </div>
            ))
            ) : (
            <p className="no-results">No results found</p>
            )}
        </div>
        </div>
    );
    };

    export default Catalogue;
