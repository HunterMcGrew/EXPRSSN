import React from "react";
import "../pages/css/NavBar.css";
import logo from './assets/logo.png'

function NavBar() {
    return (

        <header className="is-flex is-justify-content-space-between is-align-items-center" id="">
            {/* Logo / Name */}
            <div className="logo" id="">
                <a href="/"><img src={logo} alt="logo" height={200} width={200} /></a>
            </div>
            {/* NavBar Elements */}
            <nav className="mr-5" id="">
                
                    <a href="/" className="mr-3 ml-3">Home</a>
                
                
                    <a href="/explore" className="mr-3 ml-3">Explore</a>
                
                
                    <a href="/add" className="mr-3 ml-3">Add</a>
                
                
                    <a href="/Login" className="mr-3 ml-3">Login</a>

            </nav>

        </header>

    );
};

export default NavBar;