import { Container, Typography, Paper, List, ListItem, Avatar, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UserService from '../API/UserService';
import PlanService from '../API/PlanService';
import { useNavigate } from 'react-router-dom';
import PlanComponent from './PlanComponent';

const ProfileComponent = () => {
  const [user, setUser] = useState(null);
  const [plans, setPlans] = useState([]); 

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await UserService.getUsers();
        setUser(userRes.data);

        const plansRes = await PlanService.getPlans();
        setPlans(plansRes.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate('/login', { state: { message: 'Your session expired' } });
        } else {
          console.error("An error occurred:", error);
        }
      }
    };

    fetchData(); 
  }, [navigate]);

  return (
    <Container style={{ padding: '2vh' }}>
      {user && (
        <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
          <Paper elevation={3} style={{ padding: '20px', width: '100%', maxWidth: '600px' }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar
                alt={user.name}
                src={user.avatar}
                sx={{ width: 80, height: 80, mb: 2 }}
              />
              <Typography variant="h5" gutterBottom>
                {user.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                {user.email}
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="h6" gutterBottom>
                Saved plans
              </Typography>
              <PlanComponent plans={plans} />
            </Box>
          </Paper>
        </Box>
      )}
    </Container>
  );
};

export default ProfileComponent;
