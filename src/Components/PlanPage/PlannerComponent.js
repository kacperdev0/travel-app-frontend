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

  const [plans, setPlans] = useState([
    {
        "type": "node",
        "id": 1747420659,
        "lat": 53.2059137,
        "lon": 23.3435479,
        "tags": {
            "name": "Zajma Pensjonat",
            "tourism": "hotel"
        }
    },
    {
        "type": "node",
        "id": 9661352209,
        "lat": 53.1342155,
        "lon": 23.1627376,
        "tags": {
            "addr:city": "Białystok",
            "addr:country": "PL",
            "addr:housenumber": "24",
            "addr:postcode": "15-092",
            "addr:street": "Henryka Sienkiewicza",
            "beds": "10",
            "contact:email": "recepcja@kamienica.bialystok.pl",
            "contact:facebook": "https://www.facebook.com/kamienica.bialystok",
            "contact:instagram": "https://www.instagram.com/kamienica.bialystok/",
            "contact:mobile": "+48888888777;+48790500095",
            "contact:website": "https://www.kamienica.bialystok.pl/",
            "email": "recepcja@kamienica.bialystok.pl",
            "internet_access": "wlan",
            "mobile": "+48888888777;+48790500095",
            "name": "Kamienica",
            "payment:american_express": "yes",
            "payment:cash": "yes",
            "payment:contactless": "yes",
            "payment:diners_club": "yes",
            "payment:discover_card": "yes",
            "payment:jcb": "yes",
            "payment:maestro": "yes",
            "payment:mastercard": "yes",
            "payment:visa": "yes",
            "payment:visa_debit": "yes",
            "payment:visa_electron": "yes",
            "rooms": "6",
            "smoking": "no",
            "stars": "2",
            "tourism": "hotel",
            "website": "https://www.kamienica.bialystok.pl/",
            "wheelchair": "no"
        }
    }
])

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
         plan={plans}
        />
      ) : (
        <PlanEditorComponent
         plans={plans}
         addLocation={addLocation}
         savePlan={savePlan} 
         setPlans={setPlans}
        />
      )}
    </Grid>
  );
};

export default PlannerComponent;