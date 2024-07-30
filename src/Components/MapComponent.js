import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import HotelService from '../API/HotelService';
import { Grid, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import HotelDataComponent from './HotelDataComponent';
import styles from '../CSS/MapStyle.module.css';  // Import the CSS module
import SearchBarComponent from './SearchBarComponent';

const SetMapCenter = ({ center }) => {
  const map = useMap()
  map.setView(center)
  return null
}

const MapComponent = () => {
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [location, setLocation] = useState([52.2297, 21.0122]);

  useEffect(() => {
    updateHotels()
  }, [location]);
  
  const updateHotels = () => {
    const params = {
      latitude: location[0],
      longitude: location[1]
    };

    HotelService.getHotels(params)
    .then(res => {
      setHotels(res.data.elements);
      console.log(res.data.elements);
    })
    .catch(error => {
      console.error('Error fetching hotels:', error);
    });
  }

  const handleLocationChange = (data) => {
    setLocation(data)
  }

  return (
    <Grid container className={styles.container}>
      <Grid item xs={12} md={4} className={styles.listContainer}>
        {selectedHotel ? (
          <div style={{ padding: "2vh" }}>
            <HotelDataComponent hotelData={selectedHotel} setHotelData={setSelectedHotel} />
          </div>
        ) : (
          <div className={styles.fullWidth}>
            <Typography padding="1vh" height="1vh" align='center' variant="h6" gutterBottom>
              Hotel List
            </Typography>
            <IconButton onClick={() => {handleLocationChange([53.13333, 23.16433])}}>Change Location</IconButton>
            <div className={styles.hotelList}>
              <List>
                {hotels.map((hotel, index) => (
                  <ListItem key={index}>
                    <Paper elevation={3} className={styles.paper} onClick={() => { setSelectedHotel(hotel) }}>
                      <ListItemText
                        primary={hotel.tags.name}
                        secondary={hotel.tags["addr:street"]}
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
        <SearchBarComponent setLocation={handleLocationChange}/>
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
          {hotels.map((hotel, index) => (
            <Marker key={index} position={[hotel.lat, hotel.lon]}>
              <Popup>
                <div>
                  <Typography variant="h6">{hotel.tags.name}</Typography>
                  <Typography variant="body2">{hotel.tags.description}</Typography>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Grid>
    </Grid>
  );
};

export default MapComponent;
