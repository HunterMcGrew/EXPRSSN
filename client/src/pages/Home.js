import React, { useRef } from 'react';
import test from './images/test.jpg';
import './css/Home.css';
import CollectionSlider from '../components/homeComponents/collectionSlider';
// Home page to give them a little taste of what the site is before they sign up

// if clicked on a piece or collection without being signed in, push to login/signup page

function Home() {
  return <CollectionSlider />;
}

export default Home;
