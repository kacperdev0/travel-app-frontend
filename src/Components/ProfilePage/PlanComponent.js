import React, { useEffect } from 'react';
import { Paper, Typography, Stack, Box, IconButton } from '@mui/material';
import { Save as SaveIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import PublicIcon from '@mui/icons-material/Public';
import PublicOffIcon from '@mui/icons-material/PublicOff';

const PlanCard = ({ plan }) => {
  const navigate = useNavigate()

  useEffect(() => {

  })

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
      onClick={() => {
        navigate("/", {state: {data: plan}})
      }}
    >
      <Stack direction="row">
        <Typography variant="h6" gutterBottom>
          Plan ID: {plan.id}
        </Typography>
        <IconButton>
          { plan.public ? (
            <PublicIcon/>
          ) : (
            <PublicOffIcon/>
          )}
        </IconButton>
      </Stack>
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
      </Box>
    </Paper>
  );
}

const PlanComponent = ({ plans })  => { 
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
