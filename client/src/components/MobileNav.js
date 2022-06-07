import React from 'react';
import '../pages/css/mobileNav.css';

const MobileNav = ({ isOpen, toggle }) => {
  return (
    <div isOpen={isOpen} onClick={toggle} id="myNav" className="overlay">
      {/* Button to close the overlay navigation  */}
      <a href="javascript:void(0)" className="closebtn" onClick={toggle}>
        &times;
      </a>
      {/* Overlay content */}
      <div className="overlay-content">
        <a href="#" onClick={toggle}>
          About
        </a>
        <a href="#" onClick={toggle}>
          Services
        </a>
        <a href="#" onClick={toggle}>
          Clients
        </a>
        <a href="#" onClick={toggle}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
