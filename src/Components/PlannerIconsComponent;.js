import React, { useEffect, useState } from 'react';
import { Button, Grid, IconButton, Paper, Typography } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import KingBedIcon from '@mui/icons-material/KingBed';

const PlannerIconsComponent = ({hotel, chooseHotel, airportDeparture, chooseAirportDeparture, airportArrival, chooseAirportArrival}) => {
  const blueBackground = {
    backgroundColor: "#1976d2",
  }

  const whiteIcon = {
    color: "white"
  }

  return (
    <div style={{ width: '100%' }}>
      <Grid container spacing={2}>
        <Grid textAlign="center" item xs={2.5}>
          <Paper style={hotel ? blueBackground : {}} >
            <IconButton><KingBedIcon style={hotel ? whiteIcon : {}}/></IconButton>
          </Paper>
        </Grid>
        <Grid textAlign="center" item xs={2.5}>
          <Paper style={airportDeparture ? blueBackground : {}} >
          <IconButton variant="contained"><FlightTakeoffIcon style={airportDeparture ? whiteIcon : {}}/></IconButton>
          </Paper>
        </Grid>
        <Grid textAlign="center" item xs={2.5}>
            <Paper style={airportArrival ? blueBackground : {}} >
                <IconButton><FlightLandIcon style={airportArrival ? whiteIcon : {}}/></IconButton>  
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
