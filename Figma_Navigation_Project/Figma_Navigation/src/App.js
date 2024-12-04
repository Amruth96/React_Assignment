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










//import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchBar from './Page1/SearchBar';   // Page1 Components
import Catalogue from './Page1/Catalogue';   // Page1 Components
import Footer from './Page1/Footer';         // Page1 Components
import "./App.css";

// Page2 Components
import SearchBarPage2 from './Page2/SearchBar';  // Page2 SearchBar
import CataloguePage2 from './Page2/Catalogue';  // Page2 Catalogue

const App = () => {
  // Mock data for Page 1
  const catalogItemsPage1 = [
    { id: 1, name: "Vegetables", image: "1.jpg" },
    { id: 2, name: "Bak Kwa", image: "2.jpg" },
    { id: 3, name: "Soup", image: "3.jpg" },
    { id: 4, name: "Finger Food", image: "4.jpg" },
    { id: 5, name: "Confectionery", image: "5.jpg" },
    { id: 6, name: "Snacks", image: "6.jpg" },
    { id: 7, name: "Candy & Sweet", image: "7.jpg" },
    { id: 8, name: "Nuts & Seeds", image: "8.jpg" },
    { id: 9, name: "Fruits", image: "9.jpg" },
  ];

  // Mock data for Page 2
  const productsPage2 = [
    { id: 1, name: 'Vegetables, John Farm', location: 'East Coast', price: 22.5, rating: 4.5, image: 'P1.jpg' },
    { id: 2, name: 'Vegetables, Farmer Farm', location: 'South North 43', price: 22.5, rating: 4.5, image: 'P2.jpg' },
    { id: 3, name: 'Organic vegetables, Labor Kitchen', location: 'North Gate 755', price: 22.5, rating: 4.5, image: 'P3.jpg' },
    { id: 4, name: 'Vegetable cabbage, Mars Shop', location: 'Ecma 1213', price: 22.5, rating: 4.5, image: 'P4.jpg' },
    { id: 5, name: 'Veg YNZ, John Kitchen', location: 'Dallas 2334', price: 22.5, rating: 4.3, image: 'P5.jpg' },
  ];

  // Function to handle cart page actions
  const handlePage3ButtonClick = () => {
    alert('Order Placed');
  };

  return (
    <Router>
      <div className="app">
        {/* Navigation Bar */}
        <nav className="navbar">
          <Link className="nav-button" to="/">HomePage</Link>
          <Link className="nav-button" to="/vegetables">Vegetables</Link>
          <Link className="nav-button" to="/cart">Cart</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={
            <div>
              <SearchBar />
              <Catalogue items={catalogItemsPage1} />
              <Footer />
            </div>
          } />
          
          <Route path="/vegetables" element={
            <div>
              <SearchBarPage2 />
              <CataloguePage2 products={productsPage2} />
            </div>
          } />

          <Route path="/cart" element={
            <div className="page3">
              <h2>My Cart</h2>
              <div className="product-card">
                <div className="product-card-content">
                  <img
                    src={productsPage2[0].image}
                    alt={productsPage2[0].name}
                    className="product-image"
                  />
                  <div className="product-details">
                    <h3>{productsPage2[0].name}</h3>
                    <p>{productsPage2[0].location}</p>
                    <p>S${productsPage2[0].price.toFixed(2)}</p>
                    <p>Rating: {productsPage2[0].rating} ⭐</p>
                  </div>
                </div>
              </div>
             
              <button className="page3-button" onClick={handlePage3ButtonClick}>Order Now</button>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
