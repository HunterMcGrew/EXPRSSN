import React from 'react';

import { AppBar, Typography, Toolbar, Stack, Button } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar style={style.nav} position="static">
      <Toolbar style={style.container}>
        <Typography style={style.title} variant="h2" component="div">
          EXPRSSN
        </Typography>
        <Stack style={style.buttonContainer} direction="row" spacing={2}>
          <Button style={style.navItem} color="inherit">
            Home
          </Button>
          <Button style={style.navItem} color="inherit">
            Explore
          </Button>
          <Button style={style.navItem} color="inherit">
            ADD
          </Button>
          <Button style={style.navItem} color="inherit">
            Login
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

const style = {
  nav: {
    background: '#fff',
    height: 80,
    // margin-top: -80px;
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 80,
    zIndex: 1,
    width: '100%',
    maxWidth: '89%',
  },
  title: {
    color: '#82c0cc',
    justifyContent: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 24,
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    textAlign: 'center',
    marginRight: -22,
    whiteSpace: 'nowrap',
  },
  navItem: {
    color: '#6c757d',
    fontSize: 30,
    fontWeight: 'bolder',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    height: '100%',
  },
};

export default NavBar;
