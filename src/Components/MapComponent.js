import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import HotelService from '../API/HotelService';
import { useEffect, useState } from 'react';
import SearchBarComponent from './SearchBarComponent';

const MapComponent = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const params = {
      "latitude": "52.229675",
      "longitude": "21.012230"
    }

    HotelService.getHotels(params).then(res => {
      setHotels(res.data.elements)
      console.log(res.data.elements)
    }).catch(error => {
      console.error('Error fetching hotels:', error);
    });
  }, {})

  return (
    <div style={{ height: '90vh', width: '100%', margin: 0, padding: 0, overflow: 'hidden' }}>
      
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
              
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
