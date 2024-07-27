import React from 'react';
import { IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
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
