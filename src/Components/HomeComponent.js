import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MapComponent from './MapComponent';
import PlannerComponent from './PlannerComponent';

const HomeComponent = () => {
  const [destination, setDestination] = useState();

  return (
    <PlannerComponent/>
  );
};

export default HomeComponent;
