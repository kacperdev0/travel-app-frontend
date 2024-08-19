import React from 'react';
import { Paper, Typography, IconButton, Box } from '@mui/material';
import { Save as SaveIcon } from '@mui/icons-material';

const PlanCard = ({ plan }) => {
  return (
    <Paper 
      elevation={3}
      style={{ 
        padding: '16px', 
        margin: '8px', 
        position: 'relative', 
        overflow: 'hidden',
        transition: 'transform 0.2s ease-in-out',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <Typography variant="h6" gutterBottom>
        Plan ID: {plan.id}
      </Typography>
      <Typography variant="body1">
        Hotel: {plan.hotel}
      </Typography>
      <Box 
        position="absolute" 
        top="16px" 
        right="16px" 
        style={{ 
          opacity: 0, 
          transition: 'opacity 0.2s ease-in-out'
        }}
        className="save-icon"
      >
        <IconButton>
          <SaveIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}

const PlanComponent = ({ plans }) => { 
  return (
    <Box display="flex" flexWrap="wrap">
      {plans.length > 0 ? (
        plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))
      ) : (
        <Typography variant="body1" color="textSecondary">
          No plans available.
        </Typography>
      )}
    </Box>
  );
}

export default PlanComponent;
