import { ListItem, ListItemText, Drawer, List, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavigationBarComponent = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <AppBar position='static'>
      <Toolbar>
          <IconButton color="inherit"><AccountCircleIcon/></IconButton>
          <Button color="inherit" component={Link} to="/">Home</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBarComponent;
