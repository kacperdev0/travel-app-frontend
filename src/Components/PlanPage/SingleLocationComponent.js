import React from 'react';
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const SingleLocationComponent = ({ location }) => {

  return (
    <Paper elevation={3} height="10vh" mb="10hv">
        {location.tags.name}
    </Paper>
  );
};

export default SingleLocationComponent;
