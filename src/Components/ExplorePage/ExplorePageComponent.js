import { Container, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ExplorePageComponent = () => {
  return (
    <Container>
      <Paper sx={{p: '6vh', mt: 4, justifyContent: "center", textAlign: "center" }} elevation="3">
        Explore page
      </Paper>
    </Container>
  );
};

export default ExplorePageComponent;
