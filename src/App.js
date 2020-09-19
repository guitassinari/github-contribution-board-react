import React from 'react';
import './App.css';
import WeeklyContribution from './components/WeeklyContribution/WeeklyContribution';

function App() {
  return (
    <div className="App">
      <WeeklyContribution contributions={[1, 4, 7, 8 , 0, 9]} />
    </div>
  );
}

export default App;
