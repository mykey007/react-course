import React from 'react';
import './App.css';
import ScoreCard from './ScoreCard';
import IconList from './IconList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IconList/>
        <ScoreCard/>
      </header>
    </div>
  );
}

export default App;
