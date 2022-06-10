import React, { useRef } from 'react';
import test from './images/test.jpg';
import './css/Home.css';
import CollectionSlider from '../components/homeComponents/collectionSlider';
// Home page to give them a little taste of what the site is before they sign up

// if clicked on a piece or collection without being signed in, push to login/signup page

function Home() {
  const collectionData = [
    { name: 'G', img: test },
    { name: 'H', img: test },
    { name: 'F', img: test },
    { name: 'T', img: test },
    { name: 'I', img: test },
    { name: 'J', img: test },
    { name: 'K', img: test },
    { name: 'L', img: test },
    { name: 'M', img: test },
    { name: 'N', img: test },
  ];
  const startIndex = 0;
  for (let i = startIndex; i < 5; i++) {
    let newEl = (
      <div className="column is-3 pb-5" id="">
        <div className="collection-name">
          <h4 className="is-size-5 pl-4">{collectionData[i].name}</h4>
        </div>
        <div className="" id="">
          <img className="image" src={collectionData[i].img} alt="test"></img>
        </div>
      </div>
    );
  }
  const artistData = [
    'G',
    'H',
    'F',
    'T',
    'I',
    'J',
    'P',
    'G2',
    'H2',
    'F2',
    'T2',
    'I2',
    'J2',
    'P2',
  ];

  return <CollectionSlider />;
}

export default Home;
