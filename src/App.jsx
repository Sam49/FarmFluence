import { useState } from 'react'
import React from 'react';
import LandingPage from './pages/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPgae';
import HomePage from './pages/HomePage';
import Explore from './pages/ExplorePgae';
import LoginPage from './pages/LoginPage';
import Profile from './pages/ProfilePage';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/signup" element={<SignUpPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/explore" element={<Explore />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
