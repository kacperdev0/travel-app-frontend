import React, { useEffect, useState } from 'react';
import { Button, Grid, IconButton, Paper, Typography } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import KingBedIcon from '@mui/icons-material/KingBed';

const PlannerIconsComponent = () => {
  return (
    <div style={{ width: '100%' }}>
      <Grid container spacing={2}>
        <Grid textAlign="center" item xs={2.5}>
          <Paper>
            <IconButton variant="contained"><KingBedIcon/></IconButton>
          </Paper>
        </Grid>
        <Grid textAlign="center" item xs={2.5}>
          <Paper>
          <IconButton variant="contained"><FlightTakeoffIcon/></IconButton>
          </Paper>
        </Grid>
        <Grid textAlign="center" item xs={2.5}>
            <Paper>
                <IconButton><FlightLandIcon/></IconButton>  
            </Paper>
        </Grid>
        <Grid textAlign="center" item xs={4.5}>
          <Button variant="contained">SAVE</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default PlannerIconsComponent;
