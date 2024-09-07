import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PlanService from '../../API/PlanService';
import { handleLoginError } from '../../Objects/HandleLogin';
import { Save } from '@mui/icons-material';
import UserService from '../../API/UserService';

const ProfileSettingsComponent = () => {

  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    UserService.getUsers().then((res) =>{
        setUser(res.data)
    }).catch((error) => {
        handleLoginError(navigate, error, "/profile/settings")
    })
  }, [])

  return (
    <Container style={{ padding: '2vh' }}>
        {user ? ( 
        <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
          <Paper elevation={3} style={{ padding: '20px', width: '100%', maxWidth: '800px' }}>
            <Typography variant='h4'>
                You're logged as: {user.email}
            </Typography>
          </Paper>
        </Box>
        ) : (<></>)}
    </Container>
  );
};

export default ProfileSettingsComponent;
