import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import HotelService from '../API/HotelService';
import styles from '../CSS/MapStyle.module.css';
import SearchBarComponent from './SearchBarComponent';
import MapComponent from './MapComponent';
import ElementsListComponent from './ElementsListComponent';
import PlannerIconsComponent from './PlannerIconsComponent;';
import AirportService from '../API/AirportService';

const PlannerComponent = () => {
  const [hotel, setHotel] = useState(null);
  const [airportDeparture, setAirportDeparture] = useState(null);
  const [airportArrival, setAirportArrival] = useState(null);
  const [step, setStep] = useState(1)

  const [selectedElement, setSelectedElement] = useState(null);
  const [points, setPoints] = useState([]);
  const [location, setLocation] = useState([52.52000660, 13.40495400]);
  const [zoom, setZoom] = useState(10)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation([pos.coords.latitude, pos.coords.longitude]);
          setLoading(false)
        },
        (err) => {
          console.error("Error fetching location:", err);
          setLoading(false)
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setLoading(false)
    }
  }, []);

  useEffect(() => {
    if (loading) {
      return
    }
    switch (step) {
      case 1:
        setZoom(10)
        updateHotels(location)
        break
      case 2:
        setZoom(8)
        updateAirports(location)
        break
      case 3:
        setZoom(8)
        updateAirports(location)
        break
    }
  }, [step, location])

  const updateHotels = async (location) => {
    const hotels = await HotelService.getHotels(location)
    setPoints(hotels)
  };

  const updateAirports = async (location) => {
    const airports = await AirportService.getAirports(location)
    console.log(airports)
    setPoints(airports)
  }

  const setFinal = (element) => {
    switch (step) {
      case 1:
        setHotel(element)
        break
      case 2:
        setAirportDeparture(element)
        break
      case 3:
        setAirportArrival(element)
        break
    }
  }

  if (loading) {
    return;
  }

  return (
    <Grid container className={styles.container}>
      <Grid item xs={12} md={4} className={styles.listContainer}>
        <Box width="100%" display="flex" flexDirection="column" gap={2}>
          <PlannerIconsComponent 
            hotel={hotel} chooseHotel={() => {setStep(1)}}
            airportDeparture={airportDeparture} chooseAirportDeparture={() => {setStep(2)}}
            airportArrival={airportArrival}  chooseAirportArrival={() => {setStep(3)}}
          />
          <ElementsListComponent 
            points={points} 
            setFinal={setFinal} 
            selectedElement={selectedElement} 
            setSelectedElement={setSelectedElement} 
          />
        </Box>
      </Grid>
      
      <Grid item xs={12} md={8} style={{ height: '100%' }}>
        <SearchBarComponent setMainLocation={setLocation}/>
        <MapComponent location={location} points={points} setSelectedElement={setSelectedElement} zoom={zoom} />
      </Grid>
    </Grid>
  );
};

export default PlannerComponent;
