// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './Components/LoginComponent';
import MainPageComponent from './Components/MainPageComponent';
import NavigationBarComponent from './Components/NavigationBarComponent';
import RegisterComponent from './Components/RegisterComponent';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBarComponent />
        <Routes>
          <Route exact path="/" element={<MainPageComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
