import React from "react";
import "../pages/css/NavBar.css";

function NavBar() {
    return(

        <header className="is-flex is-justify-content-space-between is-align-items-center" id="">
            {/* Logo / Name */}
            <div className="" id="">
                <h2 className="ml-5 is-size-3" id="">EXPRSNN</h2>
            </div>

            {/* NavBar Elements */}
            <nav className="mr-5" id="">
                
                    <a href="/" className="mr-3 ml-3">Home</a>
                
                
                    <a href="/explore" className="mr-3 ml-3">Explore</a>
                
                
                    <a href="/add" className="mr-3 ml-3">Add</a>
                
                
                    <a href="/about" className="mr-3 ml-3">About</a>

            </nav>

        </header>

    );
};

export default NavBar;