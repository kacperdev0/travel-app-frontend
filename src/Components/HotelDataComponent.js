import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import HotelService from '../API/HotelService';
import { Grid, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Icon } from 'leaflet';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const HotelDataComponent = ({hotelData, setHotelData }) => {
  const returnToList = () => {
    setHotelData(null)
  }

  return (
    <Paper elevation="3" style={{padding: "1vh"}}>
        <IconButton onClick={returnToList}><KeyboardReturnIcon/></IconButton>
        <h1>{hotelData.tags.name}</h1>
    </Paper>
  );
};

export default HotelDataComponent;
