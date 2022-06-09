import React from 'react';
import test from './images/test.jpg';
import bannerImage from './images/banner.jpg';
import './css/Home.css';
import Banner from 'react-js-banner';
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
  bannerImage: {
    display: 'flex', 
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'centered',
    alignItems: 'stretch',
    resizeMode: 'stretch'
  }
};

function Home() {
    return(        
        <div className="container pt-5" id="">
            
            <Banner 
            title="This is an example banner with CSS and Image" 
            image={bannerImage} 
            imageClass="App-logo"
            css={this.state.banner2Css}
            />
            {/* <div className="banner" id="banner">
                <img className="bannerImage" src={bannerImage} alt="Banner" style={styles.bannerImage}></img>
            </div> */}
            <div className="pb-3" id="">
                <h2 className="has-text-weight-bold pl-5 is-size-4">Your Pieces/Collections</h2>
            </div>

            {/* Gallery */}
            <div className="columns " id="homeBody">
                {/* Margins and gap is NOT working for some reason */}
                    <div className="column is-3 pb-5" id="">
                        <div className="">
                            <h4 className="is-size-5 pl-4">Artist</h4>
                        </div>
                        <div className="" id="">
                        <img className="image" src={test} alt="test"></img>
                        </div>
                    </div>

                    <div className="column is-3 pb-5" id="">
                        <div className="">
                            <h4 className="is-size-5 pl-4">Artist</h4>
                        </div>
                        <div className="" id="">
                        <img className="image" src={test} alt="test"></img>
                        </div>
                    </div>

                    <div className=" column is-3 pb-5" id="">
                        <div className="">
                            <h4 className="is-size-5 pl-4">Artist</h4>
                        </div>
                        <div className="" id="">
                        <img className="image" src={test} alt="test"></img>
                        </div>
                    </div>

                    <div className="column is-3 pb-5" id="">
                        <div className="">
                            <h4 className="is-size-5 pl-4">Artist</h4>
                        </div>
                        <div className="" id="">
                        <img className="image" src={test} alt="test"></img>
                        </div>
                    </div>

            </div>

            {/* end top row */}

            <div className="pb-3" id="">
                <h2 className="has-text-weight-bold pl-5 is-size-4 pt-3">Favorites</h2>
            </div>

            <div className="columns is-2 " id="homeBody">
        
                    <div className="column is-3 pb-5" id="">
                        <div className="">
                            <h4 className="is-size-5 pl-4">Artist</h4>
                        </div>
                        <div className="" id="">
                        <img className="image" src={test} alt="test"></img>
                        </div>
                    </div>

                    <div className="column is-3 pb-5" id="">
                        <div className="">
                            <h4 className="is-size-5 pl-4">Artist</h4>
                        </div>
                        <div className="" id="">
                        <img className="image" src={test} alt="test"></img>
                        </div>
                    </div>

                    <div className=" column is-3 pb-5" id="">
                        <div className="">
                            <h4 className="is-size-5 pl-4">Artist</h4>
                        </div>
                        <div className="" id="">
                        <img className="image" src={test} alt="test"></img>
                        </div>
                    </div>

                    <div className=" column is-3 pb-5" id="">
                        <div className="">
                            <h4 className="is-size-5 pl-4">Artist</h4>
                        </div>
                        <div className="" id="">
                        <img className="image" src={test} alt="test"></img>
                        </div>
                    </div>

            </div>

        </div>

    );
};

export default Home;
