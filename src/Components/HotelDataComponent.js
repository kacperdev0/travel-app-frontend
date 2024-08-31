import React from 'react';
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const HotelDataComponent = ({ hotelData, setHotelData }) => {
  const returnToList = () => {
    setHotelData(null);
  };

  const formatKey = (key) => {
    return key
      .split(':').pop() // Take after the colon if it exists
      .replace(/_/g, ' ') // Replace underscores with spaces
      .replace(/^\w/, (c) => c.toUpperCase()); // Capitalize the first letter
  };

  const renderRow = (label, value) => {
    return value ? (
      <TableRow key={label}>
        <TableCell><strong>{formatKey(label)}</strong></TableCell>
        <TableCell>{value}</TableCell>
      </TableRow>
    ) : null;
  };

  const renderTableRows = (data) => {
    return Object.keys(data).map(key => {
      if (typeof data[key] === 'object') {
        return (
          <TableRow key={key}>
            <TableCell colSpan={2}>
              <strong>{formatKey(key)}</strong>
              <TableContainer component={Paper} style={{ marginTop: '1vh', marginBottom: '1vh' }}>
                <Table size="small">
                  <TableBody>
                    {renderTableRows(data[key])}
                  </TableBody>
                </Table>
              </TableContainer>
            </TableCell>
          </TableRow>
        );
      }
      return renderRow(key, data[key]);
    });
  };

  return (
    <Paper elevation={3} height="50vh" align="left" marginBottom="2vh">
      <IconButton onClick={returnToList}>
        <KeyboardReturnIcon />
      </IconButton>
      <Typography variant="h4" gutterBottom>
        {hotelData.tags.name || 'Hotel Data'}
      </Typography>
      <TableContainer component={Paper} style={{ maxHeight: '45vh', overflow: 'auto' }}>
        <Table stickyHeader>
          <TableBody>
            {renderTableRows(hotelData.tags)}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default HotelDataComponent;
