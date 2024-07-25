// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './Components/LoginComponent';
import HomeComponent from './Components/HomeComponent';
import NavigationBarComponent from './Components/NavigationBarComponent';
import RegisterComponent from './Components/RegisterComponent';

const App = () => {
  return (
    <Router>
      <div style={{ height: "100hv"}}>
        <NavigationBarComponent />
        <Routes style={{height: "95hv"}}>
          <Route exact path="/" element={<HomeComponent/>} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
