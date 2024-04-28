import React, { useState, useEffect } from 'react';
import './App.css'; 

function Main({ settings, updateStats, resetGame }) {
  const [numberToGuess, setNumberToGuess] = useState(null);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [guessesLeft, setGuessesLeft] = useState(settings.guessesAllowed);

  useEffect(() => {
    setNumberToGuess(Math.floor(Math.random() * (settings.max - settings.min + 1)) + settings.min);
    setGuessesLeft(settings.guessesAllowed);
    setMessage('');
    setGuess('');
  }, [settings]);

  const handleGuess = () => {
    const numGuess = parseInt(guess, 10);
    if (numGuess === numberToGuess) {
      setMessage('Guessed correctly');
      updateStats(guessesLeft);
      resetGame();
    } else if (guessesLeft - 1 === 0) {
      setMessage(`Out of guesses – you lost, the correct number was ${numberToGuess}`);
      resetGame();
    } else {
      setMessage(numGuess > numberToGuess ? 'high' : 'low');
      setGuessesLeft(guessesLeft - 1);
    }
    setGuess('');
  };

  return (
    <div className="game-container">
      <h1>Guess the Number!</h1>
      <input className="game-input" type="number" value={guess} onChange={e => setGuess(e.target.value)} />
      <button className="game-button" onClick={handleGuess}>Guess</button>
      <p className="game-message">{message}</p>
    </div>
  );
}

export default Main;
