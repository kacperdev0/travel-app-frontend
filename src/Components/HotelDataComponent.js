import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import HotelService from '../API/HotelService';
import { Grid, Typography, List, ListItem, ListItemText } from '@mui/material';
import Paper from '@mui/material/Paper';

const HotelDataComponent = ({hotelData}) => {

  return (
    <Paper>
        <h1>{hotelData.tags.name}</h1>
    </Paper>
  );
};

export default HotelDataComponent;
