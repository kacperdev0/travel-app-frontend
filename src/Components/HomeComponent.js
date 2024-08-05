import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MapComponent from './MapComponent';
import PlannerComponent from './PlannerComponent';

const HomeComponent = () => {
  const [destination, setDestination] = useState();

  return (
    <div>
      <PlannerComponent/>
    </div>
  );
};

export default HomeComponent;
