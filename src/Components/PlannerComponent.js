import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import HotelService from '../API/HotelService';
import styles from '../CSS/MapStyle.module.css';
import SearchBarComponent from './SearchBarComponent';
import MapComponent from './MapComponent';

const PlannerComponent = () => {
  const [hotel, setHotel] = useState(null);
  const [points, setPoints] = useState([]);
  const [location, setLocation] = useState([52.52000660, 13.40495400]);

  useEffect(() => {
    updateHotels(location);
  }, [location]);

  const updateHotels = (location) => {
    const data = {
      latitude: location[0],
      longitude: location[1],
    };

    HotelService.getHotels(data)
      .then((res) => {
        setPoints(res.data.elements || []);
        console.log(res.data.elements);
      })
      .catch((error) => {
        console.error('Error fetching hotels:', error);
      });
  };

  return (
    <Grid container className={styles.container}>
      <SearchBarComponent setMainLocation={setLocation} />
      <MapComponent location={location} points={points} setFinal={setHotel} />
    </Grid>
  );
};

export default PlannerComponent;
