import React from 'react';
import './App.css';
import ContributionBoard from './components/ContributionBoard/ContributionBoard';

function App() {
  return (
    <div className="App">
      <ContributionBoard contributions={[1, 4, 7, 8 , 0, 9, 1, 2, 3, 5, 3, 6, 4]} />
    </div>
  );
}

export default App;
