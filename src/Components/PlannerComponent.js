import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import HotelService from '../API/HotelService';
import styles from '../CSS/MapStyle.module.css';
import SearchBarComponent from './SearchBarComponent';
import MapComponent from './MapComponent';
import ElementsListComponent from './ElementsListComponent';
import PlannerIconsComponent from './PlannerIconsComponent;';

const PlannerComponent = () => {
  const [hotel, setHotel] = useState(null);
  const [airportDeparture, setAirportDeparture] = useState(null);
  const [airportArrival, setAirportArrival] = useState(null);
  const [step, setStep] = useState(1)

  const [selectedElement, setSelectedElement] = useState(null);
  const [points, setPoints] = useState([]);
  const [location, setLocation] = useState([52.52000660, 13.40495400]);

  useEffect(() => {
    updateHotels(location);
  }, [location]);

  useEffect(() => {
    console.log(hotel)
  }, [hotel]);

  const updateHotels = async (location) => {
    const hotels = await HotelService.getHotels(location)
    setPoints(hotels)
  };

  return (
    <Grid container className={styles.container}>
      <Grid item xs={12} md={4} className={styles.listContainer}>
        <Box width="100%" display="flex" flexDirection="column" gap={2}>
          <PlannerIconsComponent hotel={hotel} />
          <ElementsListComponent 
            points={points} 
            setFinal={setHotel} 
            selectedElement={selectedElement} 
            setSelectedElement={setSelectedElement} 
          />
        </Box>
      </Grid>
      
      <Grid item xs={12} md={8} style={{ height: '100%' }}>
        <MapComponent location={location} points={points} setSelectedElement={setSelectedElement}/>
      </Grid>
    </Grid>
  );
};

export default PlannerComponent;
