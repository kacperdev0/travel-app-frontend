import React, { useEffect, useState } from 'react';
import { Grid, Box, Paper, Typography } from '@mui/material';
import styles from '../CSS/MapStyle.module.css';
import PlanService from '../API/PlanService';
import { handleLoginError} from '../Objects/HandleLogin'
import SelectSaveSlotComponent from './SelectSaveSlotComponent';
import PlanEditorComponent from './PlanEditorComponent';
import { useNavigate } from 'react-router-dom';

const PlannerComponent = () => {
  const [hotel, setHotel] = useState(null)
  const [airportDeparture, setAirportDeparture] = useState(null)
  const [airportArrival, setAirportArrival] = useState(null)
  const [saving, setSaving] = useState(false)

  const navigate = useNavigate()

  const savePlan = () => {
    setSaving(true)
    //   PlanService.savePlan(
    //   {
    //     "hotel": hotel.id,
    //     "airportArrival": airportArrival.id,
    //     "airportDeparture": airportDeparture.id
    //   }
    // )
    //  .catch(error => {
    //   handleLoginError(navigate, error);
    //  });
  }



  return (
    <Grid container className={styles.container}>
      {saving ? (
        <SelectSaveSlotComponent hotelId={hotel.id} airportDepartureId={airportDeparture.id} airportArrivalId={airportArrival.id} />
      ) : (
        <PlanEditorComponent hotel={hotel} setHotel={setHotel}
         airportDeparture={airportDeparture} setAirportDeparture={setAirportDeparture}
         airportArrival={airportArrival} setAirportArrival={setAirportArrival}
         savePlan={savePlan} 
        />
      )}
    </Grid>
  );
};

export default PlannerComponent;