import React, { useState } from "react";
import UserService from "../API/UserService";
import { Container, TextField, Button, Typography, Box, CssBaseline } from '@mui/material';

const LoginComponent = () => {
  const [loginData, setLoginData] = useState({
    login: "",
    password: ""
  });

  const [loggedData, setLoggedData] = useState();

  const handleLoginChange = (e) => {
    const copy = { ...loginData };
    copy.login = e.target.value;
    setLoginData(copy);
  };

  const handlePasswordChange = (e) => {
    const copy = { ...loginData };
    copy.password = e.target.value;
    setLoginData(copy);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    UserService.loginUser(loginData)
      .then(res => {
        setLoggedData(res.data);
        console.log(res);
      })
      .catch(error => {
        console.error('Login error:', error.response.data);
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
          Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
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
            value={loginData.login}
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
            value={loginData.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginComponent;
