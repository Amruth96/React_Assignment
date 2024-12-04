import React from 'react';
import './Page2.css';

function Catalogue({ products }) {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-card-content">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.location}</p>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating} &#9733;</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default Catalogue;
