import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AstronomyPictureOfTheDay from './componets/AstronomyPictureOfTheDay';
import MarsRoverPhotos from './componets/MarsRoverPhotos';
import Homepage from './componets/Homepage';
import Login from './componets/Login';
import Register from './componets/Register';
import ProtectedRoute from './componets/ProtectedRoute'; 
import { SessionProvider } from './contexts/SessionContext';
import { AuthProvider } from './contexts/AuthContext'; 
import Navigation from './componets/Navigation';
import Header from './componets/Header';

function App() {
  return (
      <BrowserRouter>
          <AuthProvider>
              <SessionProvider>
              <Header/>
            <Navigation />
                  <Routes>
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/" element={<Homepage />} />
                      <Route element={<ProtectedRoute />}>
                          <Route path="/home" element={<Homepage />} />
                          <Route path="/astronomy-picture-of-the-day" element={<AstronomyPictureOfTheDay />} />
                          <Route path="/mars-rover-photos" element={<MarsRoverPhotos />} />
                      </Route>
                  </Routes>
              </SessionProvider>
          </AuthProvider>
      </BrowserRouter>
  );
}
export default App;
