import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import Settings from './Settings';
import Stats from './Stats';
import './App.css'; 


function GuessApp() {
  const [settings, setSettings] = useState({ guessesAllowed: 5, min: 1, max: 100 });
  const [stats, setStats] = useState({ gamesWon: 0, totalGuesses: 0 });

  const updateStats = (guessesLeft) => {
    setStats(prev => ({
      gamesWon: prev.gamesWon + 1,
      totalGuesses: prev.totalGuesses + (settings.guessesAllowed - guessesLeft)
    }));
  };

  const resetGame = () => {

  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Main</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/stats">Stats</Link>
        </nav>
        <Routes> 
          <Route path="/" element={<Main settings={settings} updateStats={updateStats} resetGame={resetGame} />} />
          <Route path="/settings" element={<Settings onUpdateSettings={setSettings} />} />
          <Route path="/stats" element={<Stats gamesWon={stats.gamesWon} averageGuesses={stats.gamesWon ? (stats.totalGuesses / stats.gamesWon).toFixed(2) : 0} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default GuessApp;
