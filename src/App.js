// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './Components/LoginComponent';
import NavigationBarComponent from './Components/NavigationBarComponent';
import RegisterComponent from './Components/RegisterComponent';
import ProfileComponent from './Components/ProfilePage/ProfileComponent';
import PlannerComponent from './Components/PlanPage/PlannerComponent';
import ProfileSettingsComponent from './Components/ProfilePage/ProfileSettingsComponent';
import ExplorePageComponent from './Components/ExplorePage/ExplorePageComponent';

const App = () => {
  return (
    <Router>
      <div style={{ height: "100vh"}}>
        <NavigationBarComponent />
        <Routes style={{height: "90hv"}}>
          <Route exact path="/" element={<PlannerComponent/>} />
          <Route exact path="/explore" element={<ExplorePageComponent/>} />
          <Route path="/profile" element={<ProfileComponent/>} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/profile/settings" element={<ProfileSettingsComponent/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
