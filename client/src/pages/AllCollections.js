// page displaying all collections
import React from 'react';
import test from './images/test.jpg';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { Button } from '@mui/material';

// The route for this page needs to have an array of objects that contain the Collection Name & image of the collection
const data = [
  'Paris',
  'London',
  'New York',
  'Tokyo',
  'Berlin',
  'Buenos Aires',
  'Cairo',
  'Canberra',
  'Rio de Janeiro',
  'Dublin',
];

const SearchBar = ({ setSearchQuery }) => (
  <form style={{ display: 'flex', justifyContent: 'center' }}>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Enter a city name"
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: 'blue' }} />
    </IconButton>
  </form>
);

const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.toLowerCase().includes(query));
  }
};

function Collections() {
  const [searchQuery, setSearchQuery] = useState('');
  const dataFiltered = filterData(searchQuery, data);
  return (
    <div className="container">
      <div
        style={{
          display: 'flex',
          alignSelf: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: 20,
        }}
      >
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="container pt-5">
          <div
            className="columns is-flex-wrap-wrap"
            id=""
            style={{ padding: 3 }}
          >
            {dataFiltered.map((d) => (
              <div
                className="column is-3"
                style={{
                  padding: 5,
                  justifyContent: 'normal',
                  fontSize: 20,
                  color: 'blue',
                  margin: 1,
                  width: '250px',
                  BorderColor: 'green',
                  borderWidth: '10px',
                }}
                key={d.id}
              >
                {d}
                <img className="image" src={test} alt="test"></img>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="container pt-5" id="">
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
      </div> */}
    </div>
  );
}

export default Collections;
