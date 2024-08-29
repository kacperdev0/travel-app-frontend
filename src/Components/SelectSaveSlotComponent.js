import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PlanService from '../API/PlanService';
import { handleLoginError } from '../Objects/HandleLogin';
import { Save } from '@mui/icons-material';

const SelectSaveSlotComponent = ({ hotelId, airportDepartureId, airportArrivalId }) => {
  const maxSlots = 10;

  const [slots, setSlots] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const plansRes = await PlanService.getPlans();
        if (plansRes.data) {
          setSlots([...plansRes.data, ...Array(maxSlots).fill(null)].slice(0, maxSlots));
          console.log(slots)
        }
        
      } catch (error) {
        handleLoginError(navigate, error, "/");
      }
    };

    fetchData();
  }, []);

  
  const savePlan = () => {
      PlanService.savePlan(
      {
        "hotel": hotelId,
        "airportArrival": airportArrivalId,
        "airportDeparture": airportDepartureId
      }
    )
    navigate("/profile")
  }

  const overwritePlan = (id) => {
    PlanService.overwritePlan(
      {
        "id": id,
        "hotel": hotelId,
        "airportArrival": airportArrivalId,
        "airportDeparture": airportDepartureId
      }
    )
    navigate("/profile")
  }

  return (
    <Grid width="80%" marginLeft="10%" marginTop="5%" align="center">
      <Typography variant="h6" gutterBottom align="center">
        Saved Plans
      </Typography>
      <Box display="flex" justifyContent="center">
        <Grid container spacing={2} justifyContent="center">
          {slots.map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                style={{
                  height: 100,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: 16,
                  backgroundColor: plan ? 'lightblue' : 'lightgray', 
                }}
              >
                {plan ? (
                  <div
                  onClick={() => {
                    
                  }}>
                    <Typography variant="h8">{`Plan ${plan.hotel}`}</Typography><br></br>
                    <Typography variant="h10">{`Date: ${plan.saveTime}`}</Typography>
                  </div>
                ) : (
                  <Typography 
                    variant="body1"
                    onClick={() => {savePlan()}}>
                    Empty Slot
                  </Typography>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default SelectSaveSlotComponent;
