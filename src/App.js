import React from 'react';
import './App.css';
import ContributionBoard from './components/ContributionBoard/ContributionBoard';
import styled from 'styled-components'

const AppContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 800px;
  height: 100vh;
  margin: auto;
`

const ContributionBoardContainer = styled.div`
  flex-grow: 1;
`

function App() {
  return (
    <AppContainer>
      <ContributionBoardContainer >
        <ContributionBoard contributions={[1, 4, 7, 8 , 0, 9, 1, 2, 3, 5, 3, 6, 4]} />
      </ContributionBoardContainer>
    </AppContainer>
  );
}

export default App;
