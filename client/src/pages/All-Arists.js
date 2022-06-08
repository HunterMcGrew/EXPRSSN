import React from "react";
import test from "./images/test.jpg";
// Page displaying all artists

// idk if we need this

function Artists() {
    return(

        <div className="container pt-5" id="">

            <div className="columns is-flex-wrap-wrap" id="">

                <div className="column is-3" id="">
                    <img className="image" src={test} alt="test"></img>
                </div>

                <div className="column is-3" id="">
                    <img className="image" src={test} alt="test"></img>
                </div>

                <div className="column is-3" id="">
                    <img className="image" src={test} alt="test"></img>
                </div>

                <div className="column is-3" id="">
                    <img className="image" src={test} alt="test"></img>
                </div>

                <div className="column is-3" id="">
                    <img className="image" src={test} alt="test"></img>
                </div>

                <div className="column is-3" id="">
                    <img className="image" src={test} alt="test"></img>
                </div>

                <div className="column is-3" id="">
                    <img className="image" src={test} alt="test"></img>
                </div>

                <div className="column is-3" id="">
                    <img className="image" src={test} alt="test"></img>
                </div>


            </div>

        </div>

    );
};

export default Artists;