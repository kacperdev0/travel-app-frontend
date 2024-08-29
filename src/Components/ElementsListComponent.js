import React from 'react';
import styles from '../CSS/MapStyle.module.css';
import { ListItem, List, ListItemText, Paper, Button, Grid } from '@mui/material';
import HotelDataComponent from './HotelDataComponent';

const ElementListComponent = ({points, setFinal, selectedElement, setSelectedElement}) => {

  return (
    <Grid height="80hv">
        {selectedElement ? (
          <div style={{ padding: '2vh', width: '100%' }}>
            <HotelDataComponent hotelData={selectedElement} setHotelData={setSelectedElement} />
            <Button variant='contained' style={{marginLeft: "40%", marginTop: "5%"}} onClick={() => setFinal(selectedElement)}>Select</Button>
          </div>
        ) : (
            <Grid maxHeight="calc(80vh)" overflow="auto">
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
           </Grid>
        )}
    </Grid>
  );
};

export default ElementListComponent;
