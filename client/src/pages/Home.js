import React from 'react';
import test from './images/test.jpg';
import './css/Home.css';

// Home page to give them a little taste of what the site is before they sign up

// if clicked on a piece or collection without being signed in, push to login/signup page

const styles = {
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
  },
};

function Home() {
  return (
    <div className="container" id="">
      {/* row for search  */}
      <div className="row" id=""></div>

      {/* Gallery */}
      <div className="row" id="">
        <div className="card col s1 m3 l3" id="">
          <div className="card-title">
            <h5>Artist</h5>
          </div>
          <div className="card-content" id="">
            <img className="image" src={test} alt="test"></img>
          </div>
        </div>

        <div className="card col s1 m3 l3" id="">
          <div className="card-title">
            <h5>Artist</h5>
          </div>
          <div className="card-content" id="">
            <img className="image" src={test} alt="test"></img>
          </div>
        </div>

        <div className="card col s1 m3 l3" id="">
          <div className="card-title">
            <h5>Artist</h5>
          </div>
          <div className="card-content" id="">
            <img className="image" src={test} alt="test"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
