// about exprssn
import React from 'react';
import './css/Home.css';
import EXPRSSNsign from './images/EXPRSSNsign.png';

function about() {
  return (
    <div className="container pt-5" id="">
      <h1
        style={{
          color: 'black',
          textAlign: 'center',
          fontSize: '45px',
          paddingTop: '5rem',
          paddingBottom: '2rem',
        }}
      >
        ABOUT EXPRSSN
      </h1>
      <p style={{ textAlign: 'center', color: 'black', paddingBottom: '1rem' }}>
        Welcome to EXPRSSN, your number one source for all things Art. We are
        dedicated to giving you the very best experience, with a focus on Artist
        Growth, and Community Interaction.
      </p>

      <p style={{ textAlign: 'center', color: 'black', paddingBottom: '1rem' }}>
        Founded in 2022 by Founders: Alex Ortega, Hunter McGrew, Stephen Kelley,
        Joshua Dominguez, and Gil Benvenitz, EXPRSSN has come a long way from
        its beginnings in Texas. The founders wanted to create a space for
        artists to come together and share their art regardless of what it was.
        Allowing artists to share whatever it is they do! There are no
        limitations to art and here at EXPRSSN we truly believe every artist is
        free to share their creations. EXPRSSN offers everyone a place where the
        community is free from slander, hate, and racism. Art comes in many
        forms, colors, shapes, and so many varieties, we simply cannot put any
        limitations on whatever artist's creative inspirations output. We now
        serve artists, Customers, and Patrons. EXPRSSN has a goal to connect the
        world through art and is thrilled that we're able to turn our passion
        into your each and own very unique experience here in our digital art
        gallery. We hope you enjoy our artists as much as we enjoy connecting
        them to you. If you have any questions or comments, please don't
        hesitate to contact us.
      </p>

      <p style={{ textAlign: 'center', color: 'black', paddingBottom: '1rem' }}>
        Sincerely,
      </p>

      <p
        style={{
          textAlign: 'center',
          color: 'black',
          paddingBottom: '5rem',
          fontStyle: 'italic',
        }}
      >
        EXPRSSN
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={EXPRSSNsign} alt="sign" className="center"></img>
      </div>
    </div>
  );
}

export default about;
