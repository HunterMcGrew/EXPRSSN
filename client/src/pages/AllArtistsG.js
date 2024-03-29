import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IconButton, TextField } from '@mui/material';
import { collectFields } from 'graphql/execution/execute';
import { QUERY_ALL_USERS } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { Link as NewLink } from 'react-router-dom';

const theme = createTheme();

//  The actual search bar HTML element
const SearchBar = ({ setSearchQuery }) => (
  <form style={{ display: 'flex', justifyContent: 'center' }}>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Enter a collection name"
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: 'blue' }} />
    </IconButton>
  </form>
);

// The search bar LOGIC
const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    //  Search for the Artists Field
    return data.filter((d) => d.artist.includes(query));
  }
};

export default function Album() {
  const [searchQuery, setSearchQuery] = useState('');
  const { data } = useQuery(QUERY_ALL_USERS);
  if (data) {
    // all pieces array
    const piecesArr = [];
    console.log(piecesArr);
    // get array of all Users
    let dataUsers = data.Users;
    console.log(dataUsers);

    // nested for loop to populate the array of pieces based on all users and their pieces
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
    const dataFiltered = filterData(searchQuery, piecesArr);
    console.log(dataFiltered);
    // console.log('all users: ' + allUserPieces);

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                All Artists
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Search for some of your favorite collections
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="outlined">
                  <NewLink to="/explore">Collections</NewLink>
                </Button>
                <Button variant="contained">Artists</Button>
              </Stack>
            </Container>
          </Box>
          <Container sx={{ py: 4 }}>
            {/* End hero unit */}

            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <Grid container spacing={4}>
              {dataFiltered.map((collection) => (
                <Grid item key={collection._id} xs={12} sm={6} md={3}>
                  <NewLink to={`/single-piece/${collection._id}`}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          // 16:9
                          pt: '1.25%',
                        }}
                        image={collection.link}
                        alt="random"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {collection.artist}
                        </Typography>
                        <Typography>{collection.description}</Typography>
                      </CardContent>
                    </Card>
                  </NewLink>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        {/* <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box> */}
        {/* End footer */}
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                All Collections
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Search for some of your favorite collections
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained">Collections</Button>
                <Button variant="outlined">Artists</Button>
              </Stack>
            </Container>
          </Box>
          <Container sx={{ py: 4 }}>
            {/* End hero unit */}

            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </Container>
        </main>
      </ThemeProvider>
    );
  }
}
