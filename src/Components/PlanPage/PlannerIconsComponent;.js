import React from 'react';
import { Button, Grid, IconButton, Paper } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import KingBedIcon from '@mui/icons-material/KingBed';
import { Navigate, useNavigate } from 'react-router-dom';

const PlannerIconsComponent = ({chooseHotel, chooseAirportDeparture, save}) => {
  const navigate = useNavigate()

  const blueBackground = {
    backgroundColor: "#1976d2",
  }

  const whiteIcon = {
    color: "white"
  }

  return (
      <Grid container height="8hv" width="95%" marginTop="2%" marginLeft="5%" spacing={1}>
        <Grid textAlign="center" item xs={3}>
          <Paper onClick={chooseHotel}>
            <IconButton><KingBedIcon/></IconButton>
          </Paper>
        </Grid>
        <Grid textAlign="center" item xs={3}>
          <Paper onClick={chooseAirportDeparture}>
          <IconButton variant="contained"><FlightTakeoffIcon/></IconButton>
          </Paper>
        </Grid>
        <Grid textAlign="center" item xs={2.4}>
          <Button variant="contained"
          onClick={() => {
            navigate("/profile")
          }}>LOAD</Button>
        </Grid>
        <Grid textAlign="center" item xs={2.4} onClick={save}>
          <Button variant="contained">SAVE</Button>
        </Grid>
      </Grid>
  );
};

export default PlannerIconsComponent;
