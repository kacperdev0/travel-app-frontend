import React from 'react';
import {  Paper, Grid, IconButton } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';


const SingleLocationComponent = ({ location }) => {

  return (
    <Paper elevation={3} mb="10vh" sx={{ p: "2vh", mb: "1vh" }}>
      <Grid container direction="row" alignItems="center" justifyContent="space-between">
        <Grid item>
          {location.tags.name}
        </Grid>
      </Grid>
    </Paper>
  );
  
};

export default SingleLocationComponent;
