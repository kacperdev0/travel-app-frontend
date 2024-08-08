import React, { useEffect, useState } from 'react';
import HotelService from '../API/HotelService';
import styles from '../CSS/MapStyle.module.css';
import { Grid, Typography, List, ListItem, ListItemText, Paper, Button } from '@mui/material';
import HotelDataComponent from './HotelDataComponent';

const ElementListComponent = ({points, setFinal, selectedElement, setSelectedElement}) => {

  return (
    <div style={{width: "100%"}}>
        {selectedElement ? (
          <div style={{ padding: '2vh', width: '100%' }}>
            <HotelDataComponent hotelData={selectedElement} setHotelData={setSelectedElement} />
            <Button variant='contained' style={{marginLeft: "40%", marginTop: "5%"}} onClick={() => setFinal(selectedElement)}>Select</Button>
          </div>
        ) : (
          <div className={styles.fullWidth}>
            <div className={styles.hotelList}>
              <List>
                {points.map((element, index) => (
                  <ListItem key={index}>
                    <Paper elevation={3} className={styles.paper} onClick={() => setSelectedElement(element)}>
                      <ListItemText
                        primary={element.tags.name}
                        secondary={element.tags['addr:street']}
                      />
                    </Paper>
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
        )}
      </div>
  );
};

export default ElementListComponent;
