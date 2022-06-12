import * as React from 'react';
import { useState } from 'react';
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

const theme = createTheme();

// SAMPLE seed data for the collection
const collectionData = [
  {
    name: 'heading 1',
    value: '1',
    image: 'https://source.unsplash.com/random',
  },
  {
    name: 'heading 2',
    value: '2',
    image: 'https://source.unsplash.com/random',
  },
  {
    name: 'heading 3',
    value: '3',
    image: 'https://source.unsplash.com/random',
  },
  {
    name: 'heading 4',
    value: '4',
    image: 'https://source.unsplash.com/random',
  },
  {
    name: 'heading 5',
    value: '5',
    image: 'https://source.unsplash.com/random',
  },
  {
    name: 'heading 6',
    value: '6',
    image: 'https://source.unsplash.com/random',
  },
  {
    name: 'heading 7',
    value: '7',
    image: 'https://source.unsplash.com/random',
  },
  {
    name: 'heading 8',
    value: '8',
    image: 'https://source.unsplash.com/random',
  },
  {
    name: 'heading 9',
    value: '9',
    image: 'https://source.unsplash.com/random',
  },
];

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
    return data.filter((d) => d.name.includes(query));
  }
};

export default function Album() {
  const [searchQuery, setSearchQuery] = useState('');
  const { data } = useQuery(QUERY_ALL_USERS);
  if (data) {
    const piecesArr = [];
    console.log(piecesArr);
    console.log(data.Users);
    let dataUsers = data.Users;

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
            <Grid container spacing={4}>
              {dataFiltered.map((collection) => (
                <Grid item key={collection._id} xs={12} sm={6} md={3}>
                  <Link to={`/products/${collection._id}`}>
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
                          {collection.name}
                        </Typography>
                        <Typography>{collection.description}</Typography>
                      </CardContent>
                    </Card>
                  </Link>
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
