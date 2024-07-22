import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import HotelService from '../API/HotelService';
import { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const params = {
      destId: '-2092174',
      searchType: 'CITY',
      arrivalDate: '2024-07-22',
      departureDate: '2024-07-25',
      adults: 1,
      childrenAge: '0,17',
      roomQty: 1,
      pageNumber: 1,
      units: 'metric',
      temperatureUnit: 'c',
      languageCode: 'en-us',
      currencyCode: 'AED'
    };

    HotelService.getHotels(params).then(res => {
      console.log(res.data);
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
      </MapContainer>
    </div>
  );
};

export default MapComponent;
