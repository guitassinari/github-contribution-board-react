import React from 'react';
import ContributionBoard from './components/ContributionBoard/ContributionBoard';
import styled from 'styled-components'
import { contributionsCountsForYear } from './facades/ContributionApiFacade'

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

const contributions = contributionsCountsForYear(2017)

function App() {
  return (
    <AppContainer>
      <ContributionBoardContainer >
        <ContributionBoard contributions={contributions} />
      </ContributionBoardContainer>
    </AppContainer>
  );
}

export default App;
