import React, { useState } from 'react';
import { TextField, Paper, List, ListItem, ListItemText, Box, Grid } from '@mui/material';
import axios from 'axios';
import styles from '../CSS/MapStyle.module.css';
import zIndex from '@mui/material/styles/zIndex';

const SearchBarComponent = ({ setMainLocation }) => {
  const [suggestions, setSuggestions] = useState([])
  const [location, setLocation] = useState('')

  const handleInputChange = async (event) => {
    const value = event.target.value
    setLocation(value)

    if (value.length > 2) {
      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${value}&addressdetails=1&limit=3`);
        setSuggestions(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data from Nominatim API:', error);
      }
    } else {
      setSuggestions([])
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setMainLocation([suggestion.lat, suggestion.lon])
    setLocation(suggestion.display_name)
    setSuggestions([])
  };

  return (
    <Grid
    width="20%"
    zIndex="1000"
    marginLeft="10vh"
    marginTop="2vh"
    backgroundColor="white"
    position="absolute">
      <TextField
        label="Location"
        variant="outlined"
        fullWidth
        value={location}
        onChange={handleInputChange}
      />
      {location && suggestions.length > 0 && (
        <Paper className={styles.suggestions}>
          <List>
            {suggestions.map((item, index) => (
              <ListItem key={index} button onClick={() => handleSuggestionClick(item)}>
                <ListItemText primary={item.display_name} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
      </Grid>
  );
};

export default SearchBarComponent;
