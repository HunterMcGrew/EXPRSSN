import React from 'react';
import test from './images/test.jpg';
import './css/Home.css';

// Home page to give them a little taste of what the site is before they sign up

// if clicked on a piece or collection without being signed in, push to login/signup page

function Home() {
  return (
    <div className="container" id="">
      {/* row for search  */}
      <div className="row" id=""></div>

      {/* Gallery */}
      <section className="row m3" id="">
        <div className="card col s1 m4 l4" id="">
          <div className="card-title">
            <h5>Artist</h5>
          </div>
          <div className="card-image" id="">
            <img className="image" src={test} alt="test"></img>
          </div>
        </div>

        <div className="card col s1 m4 l4" id="">
          <div className="card-title">
            <h5>Artist</h5>
          </div>
          <div className="card-image" id="">
            <img className="image" src={test} alt="test"></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
