import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './Card';
import CatScreen from './CatScreen';
import HomeScreen from './HomeScreeen';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/catsapi" element={<HomeScreen />} />
        <Route path="/cats" element={<Card />} />
        <Route path="/:id" element={<CatScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
