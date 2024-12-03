import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";  // Sign-up Page
import Page3 from "./components/Page3";  // Login Page
import VerificationCode from "./components/VerificationCode";
import Resetpwd from "./components/Resetpwd";
import Phonereg from "./components/Phonereg";  // Phone Registration Page
import Homescreen from "./components/Homescreen";  // Homescreen Route
import Fooddetails from "./components/Fooddetails";
import Cart from "./components/Cart";  // Import Cart component
import MyOrder from "./components/MyOrder"; // Import MyOrder component
import Profile from "./components/Profile"; // Import Profile component
import Address from "./components/Address"; // Import Address component
import Rating from "./components/Rating"; // Import Rating component
import Review from "./components/Review";  // Import Review component
import Favorites from "./components/Favorites"; // Import the Favorites component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} /> {/* Landing Page */}
        <Route path="/page1" element={<Page1 />} /> {/* Welcome Page */}
        <Route path="/signup" element={<Page2 />} /> {/* Sign-up Page */}
        <Route path="/page3" element={<Page3 />} /> {/* Login Page */}
        <Route path="/verification" element={<VerificationCode />} /> {/* Verification Code Page */}
        <Route path="/resetpwd" element={<Resetpwd />} /> {/* Reset Password Page */}
        <Route path="/phonereg" element={<Phonereg />} /> {/* Phone Registration Page */}
        <Route path="/homescreen" element={<Homescreen />} /> {/* Homescreen Route */}
        <Route path="/fooddetails" element={<Fooddetails />} /> {/* Food Details Page */}
        <Route path="/cart" element={<Cart />} />  {/* Cart Page */}
        <Route path="/myorder" element={<MyOrder />} />  {/* My Order Page */}
        <Route path="/profile" element={<Profile />} />  {/* Profile Page */}
        <Route path="/address" element={<Address />} />  {/* Address Page */}
        <Route path="/rating" element={<Rating />} />  {/* Rating Page */}
        <Route path="/review" element={<Review />} />  {/* Review Page */}
        <Route path="/favorites" element={<Favorites />} /> {/* Favorites Page */}
      </Routes>
    </Router>
  );
}

export default App;
