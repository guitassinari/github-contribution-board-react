import React from 'react';
import ContributionBoard from './components/ContributionBoard/ContributionBoard';
import styled from 'styled-components'
import { contributionsCountsForYear, availableYears } from './facades/ContributionApiFacade'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 100vh;
  margin: auto;
  align-items: center;
  justify-content: center;
`

const ContributionBoardContainer = styled.div`
  width: 100%;
`

export default class App extends React.Component {
  constructor(props) {
    super(props)
    const years = availableYears()
    this.state = {
      years: years,
      selectedYear: years[0],
    }
  }

  updateselectedYear(newSelectedYear) {
    this.setState({ selectedYear: newSelectedYear })
  }


  render() {
    const contributions = contributionsCountsForYear(Number(this.state.selectedYear))
    return (
      <AppContainer>
        <ContributionBoardContainer >
          <Dropdown options={this.state.years} onChange={(option) => this.updateselectedYear(option.value)} value={this.state.selectedYear} />
          <ContributionBoard contributions={contributions} />
        </ContributionBoardContainer>
      </AppContainer>
    );
  }
}
