import React from 'react';
import styles from '../../CSS/MapStyle.module.css';
import { ListItem, List, ListItemText, Paper, Button, Grid } from '@mui/material';
import HotelDataComponent from './HotelDataComponent';

const ElementListComponent = ({points, setFinal, selectedElement, setSelectedElement}) => {

  return (
    <Grid height="80vh">
        {selectedElement ? (
          <Grid height="65vh" padding="2.5vh" align="center">
            <Grid>
              <HotelDataComponent hotelData={selectedElement} setHotelData={setSelectedElement} />
            </Grid>

            <Grid marginTop="3vh">
              <Button variant='contained' onClick={() => setFinal(selectedElement)}>Select</Button>
            </Grid>
          </Grid>
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
