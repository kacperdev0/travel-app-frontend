import { Container, Typography, Paper, List, ListItem, ListItemText, Avatar, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UserService from '../API/UserService';
import { useNavigate } from 'react-router-dom';

const ProfileComponent = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    UserService.getUsers().then((res) => {
      console.log(res)
      setUser(res.data)
    }).catch(error => {
      if (error.response) {
       console.log("401")  
        if (error.response.status === 401) {
           console.log("blad 401")
            navigate("/login", {state: { message: "Your session expired"}})
        }
      }
    })
    console.log(user)
  }, [])

  return (
      <Container style={{padding: "2vh"}}>
        {user ? (
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
                <List>
                  
                </List>
              </Box>
            </Paper>
          </Box> 
        ) : (
          <div>
            Profile not found
          </div>
        )}
    </Container>
  );
}

export default ProfileComponent;
