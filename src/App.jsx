import { useState } from 'react'
import React from 'react';
import LandingPage from './pages/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPgae';
import HomePage from './pages/HomePage';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/signup" element={<SignUpPage />}/>
          <Route path="/home" element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
