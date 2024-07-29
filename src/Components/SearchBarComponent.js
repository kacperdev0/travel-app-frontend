import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import HotelService from '../API/HotelService';
import { Grid, Typography, List, ListItem, ListItemText, Autocomplete, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import HotelDataComponent from './HotelDataComponent';
import styles from '../CSS/MapStyle.module.css';

const SearchBarComponent = () => {
  const [suggestions, setSuggestions] = useState(["Test1","Test2","Test3"]);

  return (
    <div className={styles.searchBar}>
        <Autocomplete
            disablePortal
            id="searchbar"
            options={suggestions}
            sx={{width: 300}}
            renderInput={(params) => <TextField {...params} label="Location" />}>
        </Autocomplete>
    </div>
  );
};

export default SearchBarComponent;
