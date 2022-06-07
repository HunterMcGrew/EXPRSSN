import React from 'react';
import '../pages/css/NavBar.css';

const NavBar = ({ toggle }) => {
  /* Open when someone clicks on the span element */

  return (
    <header
      className="is-flex is-justify-content-space-between is-align-items-center"
      id=""
    >
      {/* Logo / Name */}
      <div className="" id="">
        <h2 className="ml-3 is-size-3" id="">
          EXPRSNN
        </h2>
      </div>
      {/* NavBar Elements */}
      <nav className="mr-5" id="desktopNav">
        {/* <ul className="navList" id=""> */}

        <a href="/" className="mr-3 ml-3">
          Home
        </a>

        <a href="/explore" className="mr-3 ml-3">
          Explore
        </a>

        <a href="#" className="mr-3 ml-3">
          Add
        </a>

        <a href="/about" className="mr-3 ml-3">
          About
        </a>
      </nav>
      {/* MobileNav toggle */}
      <a className="pancake" onClick={toggle}>
        open
      </a>
    </header>
  );
};

export default NavBar;
