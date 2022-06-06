import React from "react";
import test from "./images/test.jpg";
import "./css/Home.css";

// Home page to give them a little taste of what the site is before they sign up

// if clicked on a piece or collection without being signed in, push to login/signup page

function Home() {
    return(
        
        <div className="container" id="">

            {/* row for search  */}
            <div className="row" id="">


            </div>

            {/* Gallery */}
            <div className="columns" id="">
        
                    <div className="card column " id="">
                        <div className="card-title">
                            <h4>Artist</h4>
                        </div>
                        <div className="card-image" id="">
                        <img className="image" src={test} alt="test"></img>
                        </div>
                    </div>

                    <div className="card column " id="">
                        <div className="card-title">
                            <h4>Artist</h4>
                        </div>
                        <div className="card-image" id="">
                        <img className="image" src={test} alt="test"></img>
                        </div>
                    </div>

                    {/* <div className="card column " id="">
                        <div className="card-title">
                            <h4>Artist</h4>
                        </div>
                        <div className="card-content" id="">
                        <img className="image" src={test} alt="test"></img>
                        </div>
                    </div> */}

            </div>

        </div>

    );
};

export default Home;
