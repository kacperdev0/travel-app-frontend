import React, { useEffect, useState } from 'react';
import { Grid, Box, Paper, Typography } from '@mui/material';
import styles from '../../CSS/MapStyle.module.css';
import PlanService from '../../API/PlanService';
import { handleLoginError} from '../../Objects/HandleLogin'
import SelectSaveSlotComponent from './SelectSaveSlotComponent';
import PlanEditorComponent from './PlanEditorComponent';
import { useNavigate } from 'react-router-dom';
import PlanEditor from '../../Objects/PlanEditor';


const PlannerComponent = () => {
  const [hotel, setHotel] = useState(null)
  const [airportDeparture, setAirportDeparture] = useState(null)
  const [airportArrival, setAirportArrival] = useState(null)
  const [saving, setSaving] = useState(false)

  const [plans, setPlans] = useState([])

  const navigate = useNavigate()

  const savePlan = () => {
    setSaving(true)
  }

  const addLocation = (location) => {
    setPlans([...plans, location])
    console.log(plans)
  }



  return (
    <Grid container className={styles.container}>
      {saving ? (
        <SelectSaveSlotComponent 
         hotelId={hotel}
         airportDepartureId={airportDeparture}
         airportArrivalId={airportArrival}
        />
      ) : (
        <PlanEditorComponent
         plans={plans}
         addLocation={addLocation}
         savePlan={savePlan} 
        />
      )}
    </Grid>
  );
};

export default PlannerComponent;