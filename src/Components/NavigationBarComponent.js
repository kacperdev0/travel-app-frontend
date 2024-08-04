import { Button, AppBar, Toolbar, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavigationBarComponent = () => {
  return (
    <AppBar position='static' style={{height: "10hv"}}>
      <Toolbar>
          <IconButton color="inherit"><AccountCircleIcon/></IconButton>
          <Button color="inherit" component={Link} to="/">Home</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBarComponent;
