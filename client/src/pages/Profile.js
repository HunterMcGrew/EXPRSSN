// page to view a collection of pieces
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Link as NewLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useQuery,  useMutation  } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import { REMOVE_PIECE } from "../utils/mutations";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function AddCollection() {
  const [removePiece, { error }] = useMutation(REMOVE_PIECE);
  const { data } = useQuery(QUERY_ME);
  // console.log({ data });

  const handleDeleteBook = async (name) => {
    
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removePiece({ variables: { name } });

      window.location.replace("/profile");

    } catch (err) {
      console.error(err);
    }
  };

  // let user;

  if (data) {
    const myPieces = data.me.pieces;
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <AppBar position="relative">
          <Toolbar>
            <CameraIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
              Album layout
            </Typography>
          </Toolbar>
        </AppBar> */}
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: "background.paper",
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
                Collection
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                A list of your pieces. 
              </Typography>
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
            
              {myPieces.map((collection) => (
                <Grid item key={collection.name} xs={12} sm={6} md={3}>
                  <NewLink to={`/edit/${collection._id}`}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          // 16:9
                          pt: "1.25%",
                        }}
                        image={collection.link}
                        alt="random"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {collection.name}
                        </Typography>
                        <Typography>{collection.description}</Typography>
                        <Button
                          className="btn-block btn-danger"
                          onClick={() => handleDeleteBook(collection.name)}
                        >
                          Delete piece
                        </Button>
                      </CardContent>
                    </Card>
                  </NewLink>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    );
  }
}
