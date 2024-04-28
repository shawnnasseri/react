import React from 'react';

function Stats({ gamesWon, averageGuesses }) {
    return (
      <div className="container">
        <div className="stats">
          <div className="stat-item">Number of Games Won: <span className="stat-value">{gamesWon}</span></div>
          <div className="stat-item">Average Number of Guesses: <span className="stat-value">{averageGuesses}</span></div>
        </div>
      </div>
    );
  }
  
  export default Stats;