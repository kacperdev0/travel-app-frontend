import React from 'react';
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const SingleLocationComponent = ({ location }) => {

  return (
    <Paper elevation={3} mb="10vh" sx={{p: "0.5vh", mb: "1vh"}}>
        {location.tags.name}
    </Paper>
  );
};

export default SingleLocationComponent;
