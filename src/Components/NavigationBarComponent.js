import { ListItem, ListItemText, Drawer, List, Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationBarComponent = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <div>
      <Button onClick={toggleDrawer}>Menu</Button>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List>
          <ListItem button component={Link} to="/" >
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/login" >
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem button component={Link} to="/register" >
            <ListItemText primary="Register" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default NavigationBarComponent;
