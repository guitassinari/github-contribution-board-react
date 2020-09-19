import React from 'react';
import './App.css';
import ContributionDay from './components/ContributionDay/ContributionDay'

function App() {
  return (
    <div className="App">
      <ContributionDay count={9} />
    </div>
  );
}

export default App;
