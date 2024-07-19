import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MapComponent from './MapComponent';

const HomeComponent = () => {
  const [destination, setDestination] = useState();

  return (
    <div>
      <MapComponent/>
    </div>
  );
};

export default HomeComponent;
