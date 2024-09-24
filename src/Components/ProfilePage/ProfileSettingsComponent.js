import React, { useEffect, useState } from 'react';
import { Button, Paper, Typography, Box, Container, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PlanService from '../../API/PlanService';
import { handleLoginError } from '../../Objects/HandleLogin';
import { Save } from '@mui/icons-material';
import UserService from '../../API/UserService';

const ProfileSettingsComponent = () => {

  const [user, setUser] = useState(null)
  const [updatedUser, setUpdatedUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    UserService.getUsers().then((res) =>{
        setUser(res.data)
        setUpdatedUser(res.data)
    }).catch((error) => {
        handleLoginError(navigate, error, "/profile/settings")
    })
  }, [])

  const handleAvatarUrl = (event) => {
    const userCopy = {...updatedUser, avatarUrl: event.target.value}
    setUpdatedUser(userCopy)
  }

  const handleUsername = (event) => {
    const userCopy = {...updatedUser, username: event.target.value}
    setUpdatedUser(userCopy)
  }

  const updateUserData = () => {
      if (user.avatarUrl !== updatedUser.avatarUrl) {
        UserService.updateAvatarUrl(updatedUser.avatarUrl).catch((err) => {
          handleLoginError(navigate, err, "/profile/settings")
        })
      }
  
      if (user.username !== updatedUser.username) {
        UserService.updateUsername(updatedUser.username).catch((err) => {
          handleLoginError(navigate, err, "/profile/settings")
        })
      }
  }

  return (
    <Container style={{ padding: '2vh' }}>
        {user ? ( 
        <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
          <Paper elevation={3} style={{ padding: '20px', width: '100%', maxWidth: '800px' }}>
            <Typography variant='h4'>
                You're logged as: {user.email}
            </Typography>
            <Box mt={4}>
              <TextField
                fullWidth
                value={updatedUser.avatarUrl}
                onChange={handleAvatarUrl}
                label="Avatar Url"
                variant="outlined"
                size="medium" 
              />
            </Box>
            <Box mt={4}>
              <TextField
                fullWidth
                value={updatedUser.username}
                onChange={handleUsername}
                label="Username"
                variant="outlined"
                size="medium" 
              />
            </Box>
            <Box mt={4}>
              {updatedUser != user && (
                <Button onClick={() => {updateUserData()}}>SAVE</Button>
              )}
            </Box>
          </Paper>
        </Box>
        ) : (<></>)}
    </Container>
  );
};

export default ProfileSettingsComponent;
