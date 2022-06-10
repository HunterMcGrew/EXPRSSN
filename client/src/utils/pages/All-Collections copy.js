import React from 'react';
import test from './images/test.jpg';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { Button } from '@mui/material';

// Need to pull data from database and map them into the divs
// maybe randomize them


function Collections() {
  // const [searchQuery, setSearchQuery] = useState('');
  // const dataFiltered = filterData(searchQuery, data);
  return (
    <div className="container">
      
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
}

export default Collections;
