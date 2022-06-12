import React from 'react';
import '../pages/css/NavBar.css';
import logo from './assets/logo.png';
import icon from './assets/hamburgericon.png'

const NavBar = ({ toggle }) => {
  return (
    <header
      className="is-flex is-justify-content-space-between is-align-items-center"
      id=""
    >
      {/* Logo / Name */}
      <div className="logo" id="">
        <a href="/">
          <img src={logo} alt="logo" height={200} width={200} />
        </a>
      </div>
      {/* NavBar Elements */}
      <nav className="mr-5" id="desktopNav">
        <a style={{ color: "black", aHover: "white" }} href="/" className="mr-3 ml-3">
          Home
        </a>

        <a style={{ color: "black" }} href="/explore" className="mr-3 ml-3">
          Explore
        </a>

        <a style={{ color: "black" }} href="/upload" className="mr-3 ml-3">
          Upload
        </a>

        <a style={{ color: "black" }} href="/login" className="mr-3 ml-3">
          Login
        </a>
      </nav>
      {/* MobileNav toggle */}
        <img className="pancake" src={icon} alt="menuicon" onClick={toggle}></img>
    </header>
  );
};



export default NavBar;
