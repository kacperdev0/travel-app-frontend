import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingComponent = () => {
  return (
    <div style={{ width: "100%", height: "80%", textAlign: "center", marginTop: "20%"}}>
    <CircularProgress />
    </div>
  );
};

export default LoadingComponent;