import React from 'react';
import {  Paper, Grid, IconButton } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';


const SingleLocationComponent = ({ location }) => {

  return (
    <Paper elevation={3} mb="10vh" sx={{p: "1vh", mb: "1vh"}}>
      <Grid direction="row">
        <Grid>
          {location.tags.name}
        </Grid>
        <Grid>
          <IconButton>        
            <div style={{ display: 'inline-flex', transform: 'rotate(90deg)' }}>
              <CompareArrowsIcon />
            </div>
        </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SingleLocationComponent;
