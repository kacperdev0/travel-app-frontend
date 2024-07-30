import React, { useState } from 'react';
import { Autocomplete, TextField, IconButton } from '@mui/material';
import styles from '../CSS/MapStyle.module.css';
import axios from 'axios';

const SearchBarComponent = ({setMainLocation}) => {
  const [suggestions, setSuggestions] = useState(["Test1","Test2","Test3"]);
  const [location, setLocation] = useState("")

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setLocation(value);

    if (value.length > 2) {
      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${value}&addressdetails=1&limit=5`);
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching data from Nominatim API:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className={styles.searchBar}>
        <TextField 
          label="Location"
          variant='outlined'
          fullWidth
          value={location}
          onChange={handleInputChange}
          />
         
    </div>
  );
};

export default SearchBarComponent;
