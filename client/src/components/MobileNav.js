import React from 'react';
import '../pages/css/mobileNav.css';
import styled from 'styled-components';

const NavContainer = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: fixed; /*Stay in place*/
  z-index: 999; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0); /* Black fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/opacity */
  /* overflow-x: visible; Disable horizontal scroll */
  transition: 0.5s ease-in-out; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const MobileNav = ({ isOpen, toggle }) => {
  return (
    <>
      <NavContainer
        isOpen={isOpen}
        onClick={toggle}
        id="myNav"
        className="overlay"
      >
        {/* Button to close the overlay navigation  */}
        <div>
          <a
            href="/home"
            className="closebtn mt-6 pt-4"
            onClick={toggle}
          >
            &times;
          </a>
        </div>
        {/* Overlay content */}
        <div className="overlay-content">
          <a href="/" onClick={toggle}>
            Home
          </a>
          <a href="/explore" onClick={toggle}>
            Explore
          </a>
          <a href="/add" onClick={toggle}>
            Add
          </a>
          <a href="/login" onClick={toggle}>
            Login
          </a>
          <a href="/about" onClick={toggle}>
            About
          </a>
        </div>
      </NavContainer>
    </>
  );
};

export default MobileNav;
