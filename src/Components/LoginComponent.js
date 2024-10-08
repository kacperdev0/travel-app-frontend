import React, { useState, useEffect } from "react";
import UserService from "../API/UserService";
import { Container, TextField, Button, Typography, Box, CssBaseline, Grid } from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom"
import ErrorMessageComponent from "./ErrorMessageComponent";

const LoginComponent = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const redirect = location.state?.redirect || "/"
  const [message, setMessage] = useState(null)

  useEffect(()=>{
    if (location.state) {
      setMessage(location.state.message)
    }
  },[])

  const [loginData, setLoginData] = useState({
    login: "",
    password: ""
  });

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

    console.log(loginData)
    UserService.loginUser(loginData).then(response => {
      navigate(redirect)
      console.log(response.data)
     })
     .catch(error => {
      if (error.response.status == 401) {
        setMessage(error.response.data)
      }
      console.error('Error: ', error)
     });
  }

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
        <ErrorMessageComponent message={message}/>
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
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                navigate("/register")
              }}
            >
              Register
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
          
        </Box>
      </Box>
    </Container>
  );
};

export default LoginComponent;
