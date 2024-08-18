import React from 'react';
import { Button, Grid, IconButton, Paper } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import KingBedIcon from '@mui/icons-material/KingBed';

const PlannerIconsComponent = ({hotel, chooseHotel, airportDeparture, chooseAirportDeparture, airportArrival, chooseAirportArrival, save}) => {
  const blueBackground = {
    backgroundColor: "#1976d2",
  }

  const whiteIcon = {
    color: "white"
  }

  return (
    <div style={{ width: '100%' }}>
      <Grid container spacing={2}>
        <Grid textAlign="center" item xs={2.4}>
          <Paper style={hotel ? blueBackground : {}} onClick={chooseHotel}>
            <IconButton><KingBedIcon style={hotel ? whiteIcon : {}}/></IconButton>
          </Paper>
        </Grid>
        <Grid textAlign="center" item xs={2.4}>
          <Paper style={airportDeparture ? blueBackground : {}} onClick={chooseAirportDeparture}>
          <IconButton variant="contained"><FlightTakeoffIcon style={airportDeparture ? whiteIcon : {}}/></IconButton>
          </Paper>
        </Grid>
        <Grid textAlign="center" item xs={2.4}>
            <Paper style={airportArrival ? blueBackground : {}} onClick={chooseAirportArrival}>
                <IconButton><FlightLandIcon style={airportArrival ? whiteIcon : {}}/></IconButton>  
            </Paper>
        </Grid>
        <Grid textAlign="center" item xs={2.4}>
          <Button variant="contained">LOAD</Button>
        </Grid>
        <Grid textAlign="center" item xs={2.4} onClick={save}>
          <Button variant="contained">SAVE</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default PlannerIconsComponent;
