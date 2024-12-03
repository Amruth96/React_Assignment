import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <button className="back-button">
          <i className="fas fa-chevron-left"></i>
        </button>
        <h1 className="profile-title">My Account</h1>
      </div>
      <div className="profile-details">
        <div className="profile-image">
          <img src="./images/picon.jpg" alt="Eljad Eendaz" />
        </div>
        <h2 className="profile-name">Eljad Eendaz</h2>
        
        {/* Edit Profile as a link */}
        <Link to="/address" className="profile-edit">
          Edit Profile
        </Link>

        <div className="profile-inputs">
          <div className="input-group">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" className="profile-input" defaultValue="Eljad Eendaz" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="profile-input" defaultValue="prelookstudio@gmail.com" />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" className="profile-input" defaultValue="+1 (783) 0986 8786" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
