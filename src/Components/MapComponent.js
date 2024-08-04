import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import HotelService from '../API/HotelService';
import { Grid, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import HotelDataComponent from './HotelDataComponent';
import styles from '../CSS/MapStyle.module.css';
import SearchBarComponent from './SearchBarComponent';
import AirportService from '../API/AirportService';
import SliderComponent from './SliderComponent';

const SetMapCenter = ({ center }) => {
  const map = useMap()
  map.setView(center)
  return null
}

const MapComponent = () => {
  const [step, setStep] = useState(1);
  const [hotel, setHotel] = useState(null);
  const [firstAirport, setFirstAirport] = useState(null);
  const [secondAirport, setSecondAirport] = useState(null);

  const [points, setPoints] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [location, setLocation] = useState([52.52000660, 13.40495400]);

  useEffect(() => {
    const data = {
      latitude: location[0],
      longitude: location[1]
    };

    AirportService.getAirports(data)
    .then(res => {
      console.log(res.data);
    })
    .catch(error => {
      console.error('Error fetching airports:', error);
    });
  }, [])

  useEffect(() => {
    updateHotels()
  }, [location]);
  
  const updateHotels = () => {
    const data = {
      latitude: location[0],
      longitude: location[1]
    };

    HotelService.getHotels(data)
    .then(res => {
      setPoints(res.data.elements);
      console.log(res.data.elements);
    })
    .catch(error => {
      console.error('Error fetching hotels:', error);
    });
  }

  const handleSelect = () => {
    if (step === 1) {
      setHotel(selectedElement)
    }
  }

  return (
    <Grid container className={styles.container}>
      <Grid item xs={12} md={4} className={styles.listContainer}>
        {selectedElement ? (
          <div style={{ padding: "2vh", width: "100%"}}>
            <HotelDataComponent hotelData={selectedElement} setHotelData={setSelectedElement}/>
            <IconButton onClick={handleSelect}></IconButton>
          </div>
        ) : (
          <div className={styles.fullWidth}>
            <Typography padding="1vh" height="1vh" align='center' variant="h6" gutterBottom>
              {step === 1 && "Select Hotel"}
              {step === 2 && "Select Start Airport"}
              {step === 3 && "Select End Airport"}
            </Typography>
            <div className={styles.hotelList}>
              <List>
                {points.map((element, index) => (
                  <ListItem key={index}>
                    <Paper elevation={3} className={styles.paper} onClick={() => { setSelectedElement(element) }}>
                      <ListItemText
                        primary={element.tags.name}
                        secondary={element.tags["addr:street"]}
                      />
                    </Paper>
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
        )}
      </Grid>
      
      <Grid item xs={12} md={8} style={{ height: '100%' }}>
        <SearchBarComponent setMainLocation={setLocation}/>
        <MapContainer
          center={location}
          zoom={13}
          className={styles.mapContainer}
        >
          <SetMapCenter center={location} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {points.map((hotel, index) => (
            <Marker 
              key={index}
              position={ [hotel.lat, hotel.lon] } 
              eventHandlers={{
                click: () => {
                  setSelectedElement(hotel)
                }
              }}
            />
          ))}
        </MapContainer>
      </Grid>
    </Grid>
  );
};

export default MapComponent;
