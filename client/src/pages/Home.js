import React from 'react';
import test from './images/test.jpg';
import './css/Home.css';
// Home page to give them a little taste of what the site is before they sign up

// if clicked on a piece or collection without being signed in, push to login/signup page

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    size: 'is-one-quarter',
    marginTop: '5%',
    marginRight: '2.5%',
  },
};

function Home() {
  return (
    <div style={styles.mainContainer} className="container" id="">
      {/* row for search  */}
      <div className="row" id=""></div>
      {/* Gallery */}
      <section style={styles.cardContainer} className="columns" id="">
        <div style={styles.card} className="card column " id="">
          <div className="card-title">
            <h4>Artist</h4>
          </div>
          <div className="card-image" id="">
            <img className="image" src={test} alt="test"></img>
          </div>
        </div>

        <div style={styles.card} className="card column " id="">
          <div className="card-title">
            <h4>Artist</h4>
          </div>
          <div className="card-image" id="">
            <img className="image" src={test} alt="test"></img>
          </div>
        </div>
        <div style={styles.card} className="card column " id="">
          <div className="card-title">
            <h4>Artist</h4>
          </div>
          <div className="card-image" id="">
            <img className="image" src={test} alt="test"></img>
          </div>
        </div>
        <div style={styles.card} className="card column " id="">
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
      </section>
      {/* Gallery */}
    </div>
  );
}

export default Home;
