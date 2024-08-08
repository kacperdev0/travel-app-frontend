import React, {useState} from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import Paper from '@mui/material/Paper';
import HotelDataComponent from './HotelDataComponent';
import styles from '../CSS/MapStyle.module.css';
import PlannerIconsComponent from './PlannerIconsComponent;';

const SetMapCenter = ({ center }) => {
  const map = useMap();
  map.setView(center);
  return null;
};

const MapComponent = ({ location, points, setSelectedElement}) => {
  return (
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
  );
};

export default MapComponent;
