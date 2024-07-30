import React, { useState } from 'react';
import { TextField, Paper, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';
import styles from '../CSS/MapStyle.module.css';

const SearchBarComponent = ({ setMainLocation }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [location, setLocation] = useState('');

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

  const handleSuggestionClick = (suggestion) => {
    setLocation(suggestion.display_name);
    setSuggestions([]);
  };

  return (
    <div className={styles.searchBar}>
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
    </div>
  );
};

export default SearchBarComponent;
