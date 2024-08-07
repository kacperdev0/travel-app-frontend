import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import HotelService from '../API/HotelService';
import styles from '../CSS/MapStyle.module.css';
import SearchBarComponent from './SearchBarComponent';
import MapComponent from './MapComponent';
import PlannerIconsComponent from './PlannerIconsComponent;';

const PlannerComponent = () => {
  const [hotel, setHotel] = useState(null);
  const [airportDeparture, setAirportDeparture] = useState(null);
  const [airportArrival, setAirportArrival] = useState(null);
  const [step, setStep] = useState(1)

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
      <SearchBarComponent setMainLocation={setLocation} />
      <MapComponent location={location} points={points} setFinal={setHotel} />
    </Grid>
  );
};

export default PlannerComponent;
