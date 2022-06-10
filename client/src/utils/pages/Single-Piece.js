import React from "react";
import test from "./images/test.jpg";
// page to view a single piece of art

function singlePiece() {
    return(

        <div className="">
        <div className="container is-flex" id="">
            {/* display piece pic */}
            <div className="column is-7" id="">

                <img className="image" src={test} alt="test"></img>

            </div>
            {/* info about piece */}
            <div className="column is-5" id="">

                <div className="" id="">

                    <h2 className="mt-1 mb-3 is-size-4" id="">Artist Name</h2>
                    <br /> <br />
                    <h2 className="is-size-4" id="">$49.99</h2>

                </div>

            </div>

        </div>

        <div className="container" id="">
                    
            <h2 className="" id="">Description</h2>

            <p className="" id="">Vivamus id fermentum lacus. Curabitur blandit eros libero, sit amet porttitor odio maximus at. Nunc ac volutpat diam. Maecenas eu erat placerat turpis eleifend sodales eu nec urna. Mauris mattis ex non consectetur hendrerit. Pellentesque vitae nisl vitae nulla tincidunt scelerisque. Nullam consectetur, mi quis aliquet finibus, erat tortor porttitor erat, quis aliquam ante tellus sit amet nibh. Nullam aliquam vehicula ipsum, eu pharetra metus molestie id. In hac habitasse platea dictumst. Mauris molestie id enim a tempus.</p>

        </div>
        </div>

    );
};

export default singlePiece;