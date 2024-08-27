import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PlanService from '../API/PlanService';
import { handleLoginError } from '../Objects/HandleLogin';

const SelectSaveSlotComponent = ({ hotelId, airportDepartureId, airportArrivalId }) => {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const plansRes = await PlanService.getPlans();
        setPlans(plansRes.data);
      } catch (error) {
        handleLoginError(navigate, error, "/");
      }
    };

    fetchData();
  }, [navigate]);

  // Create an array of up to 10 items with a mix of plans and empty slots
  const maxSlots = 10;
  const slots = [...plans, ...Array(maxSlots).fill(null)].slice(0, maxSlots);

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
                  height: 100, // Adjust height as needed
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: 16,
                  backgroundColor: plan ? 'lightblue' : 'lightgray', // Differentiates empty slots
                }}
              >
                {plan ? (
                  <Typography variant="h6">{`Plan ${plan.id}`}</Typography>
                ) : (
                  <Typography variant="body1">Empty Slot</Typography>
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
