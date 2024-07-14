import React, { useState } from "react";
import UserService from "../API/UserService";
import { Container, TextField, Button, Typography, Box, CssBaseline } from '@mui/material';

const RegisterComponent = () => {
  const [registerData, setRegisterData] = useState({
    login: "",
    password: "",
    email: ""
  });

  const handleLoginChange = (e) => {
    const copy = { ...registerData };
    copy.login = e.target.value;
    setRegisterData(copy);
  };

  const handlePasswordChange = (e) => {
    const copy = { ...registerData };
    copy.password = e.target.value;
    setRegisterData(copy);
  };

  const handleEmailChange = (e) => {
    const copy = { ...registerData };
    copy.email = e.target.value;
    setRegisterData(copy);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    UserService.saveUser(registerData)
      .then(res => {
        console.log('Registration successful:', res);
      })
      .catch(error => {
        console.error('Registration error:', error.response.data);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={handleRegistration} noValidate sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="login"
            label="Login"
            name="login"
            autoComplete="login"
            autoFocus
            onChange={handleLoginChange}
            value={registerData.login}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePasswordChange}
            value={registerData.password}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            onChange={handleEmailChange}
            value={registerData.email}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterComponent;
