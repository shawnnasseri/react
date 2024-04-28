import React, { useState } from 'react';

function Settings({ onUpdateSettings }) {

    const [range, setRange] = React.useState({ min: 1, max: 100 });
    const [guessesAllowed, setGuessesAllowed] = useState(5);
 
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onUpdateSettings({ guessesAllowed, min: range.min, max: range.max });
    };
  
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label className="label" htmlFor="guessesAllowed">Number of Guesses Allowed:</label>
          <input className="input" id="guessesAllowed" type="number" value={guessesAllowed} onChange={(e) => setGuessesAllowed(e.target.value)} />
          <label className="label" htmlFor="rangeMin">Minimum Number:</label>
          <input className="input" id="rangeMin" type="number" value={range.min} onChange={(e) => setRange({ ...range, min: e.target.value })} />
          <label className="label" htmlFor="rangeMax">Maximum Number:</label>
          <input className="input" id="rangeMax" type="number" value={range.max} onChange={(e) => setRange({ ...range, max: e.target.value })} />
          <button className="button" type="submit">Update Settings</button>
        </form>
      </div>
    );
  }
  
  export default Settings
