import React from "react";
import test from "./images/test.jpg";
import "./css/Home.css";

// Home page to give them a little taste of what the site is before they sign up

// if clicked on a piece or collection without being signed in, push to login/signup page

function Home() {
    return(
        
        <div className="container" id="">

            {/* Gallery */}
            <div className="columns is-mobile" id="homeBody">
        
                    <div className="card column is-4" id="">
                        <div className="card-title">
                            <h4>Artist</h4>
                        </div>
                        <div className="card-image" id="">
                        <img className="image" src={test} alt="test"></img>
                        </div>
                    </div>

                    <div className="card column is-4" id="">
                        <div className="card-title">
                            <h4>Artist</h4>
                        </div>
                        <div className="card-image" id="">
                        <img className="image" src={test} alt="test"></img>
                        </div>
                    </div>

                    <div className="card column is-4" id="">
                        <div className="card-title">
                            <h4>Artist</h4>
                        </div>
                        <div className="card-image" id="">
                        <img className="image" src={test} alt="test"></img>
                        </div>
                    </div>

            </div>

        </div>

    );
};

export default Home;
