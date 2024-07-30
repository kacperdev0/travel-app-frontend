import React, { useState } from 'react';
import { Autocomplete, TextField, IconButton } from '@mui/material';
import styles from '../CSS/MapStyle.module.css';

const SearchBarComponent = ({setLocation}) => {
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
