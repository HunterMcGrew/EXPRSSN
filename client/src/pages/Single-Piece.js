import React from 'react';
import Button from '@mui/material/Button';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_USERS } from '../utils/queries';
// page to view a single piece of art

const currURL_id = window.location.href.split('/')[4];
console.log(currURL_id);

export default function SinglePiece() {
  const { data } = useQuery(QUERY_ALL_USERS);
  if (data) {
    // all pieces array
    const piecesArr = [];
    console.log(piecesArr);
    // get array of all Users
    let dataUsers = data.Users;
    console.log(dataUsers);
    for (let i = 0; i < dataUsers.length; i++) {
      const user = data.Users[i];
      console.log(user);
      const userPieces = data.Users[i].pieces;
      console.log(userPieces);
      for (let j = 0; j < userPieces.length; j++) {
        console.log(user.pieces);
        piecesArr.push(user.pieces[j]);
      }
    }
    console.log(piecesArr);

    //  SELECTED Piece array
    const selectedPiece = [];
    for (let i = 0; i < piecesArr.length; i++) {
      if (piecesArr[i]._id === currURL_id) {
        selectedPiece.push(piecesArr[i]);
      }
    }
    console.log(selectedPiece);
    if (selectedPiece.length > 0) {
      return (
        <div className="">
          <div className="container is-flex" id="">
            {/* display piece pic */}
            <div className="column is-7" id="">
              <img
                className="image"
                src={selectedPiece[0].link}
                alt="test"
              ></img>
            </div>
            {/* info about piece */}
            <div className="column is-5" id="">
              <div className="" id="">
                <h2 className="mt-1 mb-3 is-size-4" id="">
                  Artist's Name: {selectedPiece[0].artist}
                </h2>
                <br /> <br />
                <Button variant="contained">Contact Owner To Purchase</Button>
                {/* <h2 className="is-size-4" id="">
                $49.99
              </h2> */}
              </div>
            </div>
          </div>

          <div className="container" id="">
            <h2 className="is-size-4" id="">
              Description
            </h2>

            <p className="is-size-5" id="">
            {selectedPiece[0].description}
            </p>
          </div>
        </div>
      );
    }
  }
}
