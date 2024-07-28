import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import HotelService from '../API/HotelService';
import { Grid, Typography, List, ListItem, ListItemText } from '@mui/material';
import Paper from '@mui/material/Paper';
import HotelDataComponent from './HotelDataComponent';
import styles from '../CSS/MapStyle.module.css';  // Import the CSS module

const MapComponent = () => {
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);

  useEffect(() => {
    const params = {
      latitude: "52.229675",
      longitude: "21.012230"
    };

    HotelService.getHotels(params)
      .then(res => {
        setHotels(res.data.elements);
        console.log(res.data.elements);
      })
      .catch(error => {
        console.error('Error fetching hotels:', error);
      });
  }, []);

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
        <MapContainer
          center={[52.2297, 21.0122]}
          zoom={13}
          className={styles.mapContainer}
        >
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
