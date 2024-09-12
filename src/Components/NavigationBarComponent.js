import { Button, AppBar, Toolbar, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const NavigationBarComponent = () => {
  return (
    <AppBar position='static' style={{height: "10hv"}}>
      <Toolbar disableGutters>
          <IconButton color="inherit" component={Link} to="/profile"><AccountCircleIcon/></IconButton>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/explore">Explore</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBarComponent;
