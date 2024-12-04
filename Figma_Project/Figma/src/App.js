// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;























// import React from "react";
// import { useState } from "react";
// import SearchBar from "./Page1/SearchBar";
// import Catalogue from "./Page1/Catalogue";
// import Footer from "./Page1/Footer";
// import "./App.css";

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState(""); // State to track search input

//   // Mock data for catalog items
//   const catalogItems = [
//     { id: 1, name: "Vegetables", image: "1.jpg" },
//     { id: 2, name: "Bak Kwa", image: "2.jpg" },
//     { id: 3, name: "Soup", image: "3.jpg" },
//     { id: 4, name: "Finger Food", image: "4.jpg" },
//     { id: 5, name: "Confectionery", image: "5.jpg" },
//     { id: 6, name: "Snacks", image: "6.jpg" },
//     { id: 7, name: "Candy & Sweet", image: "7.jpg" },
//     { id: 8, name: "Nuts & Seeds", image: "8.jpg" },
//     { id: 9, name: "Fruits", image: "9.jpg" },
//   ];

//   // Filter catalog items based on the search term
//   const filteredItems = catalogItems.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="app">
//       <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//       <Catalogue items={filteredItems} />
//       <Footer />
//     </div>
//   );
// };

// export default App;













// import React, { useState } from 'react';
// import "./Page2/Page2.css";
// import SearchBar from './Page2/SearchBar';
// import Catalogue from './Page2/Catalogue';

// const products = [
//   { id: 1, name: 'Vegetables, John Farm', location: 'East Coast', price: 22.5, rating: 4.5, image :'P1.jpg' },
//   { id: 2, name: 'Vegetables, Farmer Farm', location: 'South North 43', price: 22.5, rating: 4.5, image :'P2.jpg' },
//   { id: 3, name: 'Organic vegetables, Labor Kitchen', location: 'North Gate 755', price: 22.5, rating: 4.5, image :'P3.jpg' },
//   { id: 4, name: 'Vegetable cabbage, Mars Shop', location: 'Ecma 1213', price: 22.5, rating: 4.5, image :'P4.jpg' },
//   { id: 5, name: 'Veg YNZ, John Kitchen', location: 'Dallas 2334', price: 22.5, rating: 4.3, image :'P5.jpg' },
// ];

// function App() {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())  // Convert both the product name and search term to lowercase for a case-insensitive match
//   );

//   return (
//     <div className="app-container">
//       <SearchBar
//         searchTerm={searchTerm}
//         handleSearchChange={handleSearchChange}
//         productCount={filteredProducts.length}
//       />
//       <Catalogue products={filteredProducts} />
//     </div>
//   );
// }

// export default App;







import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Routes and Route

import SearchBar from './Page1/SearchBar';  
import Catalogue from './Page1/Catalogue';  
import Footer from './Page1/Footer';         
import "./App.css";

import SearchBarPage2 from './Page2/SearchBar';  
import CataloguePage2 from './Page2/Catalogue';  

const App = () => {
  const [currentPage, setCurrentPage] = useState("page1");

  const catalogItemsPage1 = [ /* Mock data */ ];
  const productsPage2 = [ /* Mock data */ ];

  const firstProductPage2 = productsPage2[0];

  const handlePage3ButtonClick = () => {
    alert('Order Placed');
  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <button className="nav-button" onClick={() => setCurrentPage("page1")}>HomePage</button>
          <button className="nav-button" onClick={() => setCurrentPage("page2")}>Vegetables</button>
          <button className="nav-button" onClick={() => setCurrentPage("page3")}>Cart</button>
        </nav>

        <Routes> {/* Update to Routes component */}
          <Route path="/" element={currentPage === "page1" ? (
            <div>
              <SearchBar />
              <Catalogue items={catalogItemsPage1} />
              <Footer />
            </div>
          ) : currentPage === "page2" ? (
            <div>
              <SearchBarPage2 />
              <CataloguePage2 products={productsPage2} />
            </div>
          ) : (
            <div className="page3">
              <h2>My Cart</h2>
              <div className="product-card">
                <div className="product-card-content">
                  <img
                    src={firstProductPage2.image}
                    alt={firstProductPage2.name}
                    className="product-image"
                  />
                  <div className="product-details">
                    <h3>{firstProductPage2.name}</h3>
                    <p>{firstProductPage2.location}</p>
                    <p>S${firstProductPage2.price.toFixed(2)}</p>
                    <p>Rating: {firstProductPage2.rating} ⭐</p>
                  </div>
                </div>
              </div>
              <button className="page3-button" onClick={handlePage3ButtonClick}>Order Now</button>
            </div>
          )} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;

