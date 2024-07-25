import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import HotelService from '../API/HotelService';
import { Grid, Typography, List, ListItem, ListItemText } from '@mui/material';
import Paper from '@mui/material/Paper';

const MapComponent = () => {
  const [hotels, setHotels] = useState([]);

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
    <Grid container style={{ height: '93vh' }}>
      <Grid item xs={12} md={4} style={{ display: 'flex', flexDirection: 'column', padding: "3hv", boxSizing: 'border-box', overflowY: 'auto' }}>
        <Typography variant="h6" gutterBottom>
          Hotel List
        </Typography>
        <div style={{ flex: 1, overflowY: 'auto', maxHeight: 'calc(92vh - 64px)' }}>
          <List>
            {hotels.map((hotel, index) => (
              <ListItem key={index}>
                <Paper elevation={3} style={{width: "94%", padding: "3%"}}>
                  <ListItemText
                    primary={hotel.tags.name}
                    secondary={hotel.tags["addr:street"]}
                  />
                </Paper>
              </ListItem>
            ))}
          </List>
        </div>
      </Grid>
      <Grid item xs={12} md={8} style={{ height: '100%' }}>
        <MapContainer
          center={[52.2297, 21.0122]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
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
