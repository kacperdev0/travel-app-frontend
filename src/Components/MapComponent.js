import React, {useState} from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { Grid, Typography, List, ListItem, ListItemText, IconButton, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import HotelDataComponent from './HotelDataComponent';
import styles from '../CSS/MapStyle.module.css';

const SetMapCenter = ({ center }) => {
  const map = useMap();
  map.setView(center);
  return null;
};

const MapComponent = ({ location, points, setFinal }) => {
  const [selectedElement, setSelectedElement] = useState(null);

  return (
    <Grid container className={styles.container}>
      <Grid item xs={12} md={4} className={styles.listContainer}>
        {selectedElement ? (
          <div style={{ padding: '2vh', width: '100%' }}>
            <HotelDataComponent hotelData={selectedElement} setHotelData={setSelectedElement} />
            <Button variant='contained' style={{marginLeft: "40%", marginTop: "5%"}} onClick={() => setFinal(selectedElement)}>Select</Button>
          </div>
        ) : (
          <div className={styles.fullWidth}>
            <Typography padding="1vh" height="1vh" align="center" variant="h6" gutterBottom>
              Select Hotel
            </Typography>
            <div className={styles.hotelList}>
              <List>
                {points.map((element, index) => (
                  <ListItem key={index}>
                    <Paper elevation={3} className={styles.paper} onClick={() => setSelectedElement(element)}>
                      <ListItemText
                        primary={element.tags.name}
                        secondary={element.tags['addr:street']}
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
        <MapContainer center={location} zoom={13} className={styles.mapContainer}>
          <SetMapCenter center={location} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {points.map((element, index) => (
            <Marker
              key={index}
              position={[element.lat, element.lon]}
              eventHandlers={{
                click: () => {
                  setSelectedElement(element);
                },
              }}
            />
          ))}
        </MapContainer>
      </Grid>
    </Grid>
  );
};

export default MapComponent;
