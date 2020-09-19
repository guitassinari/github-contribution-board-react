import React from 'react'
import PropTypes from 'prop-types'
import DailyContribution from '../DailyContribution/DailyContribution.js'
import styled from 'styled-components'

const ContributionsContainer = styled.div`
  display: grid;
  grid-gap: 3px;
  align-content: start;
`

function WeeklyContribution({ contributions }) {
  const filteredContributions = (contributions || []).slice(0, 7) 
  return (
    <ContributionsContainer>
      {filteredContributions.map((contributionCount, index) => <DailyContribution key={index} count={contributionCount} />)}
    </ContributionsContainer>
  )
}

WeeklyContribution.propTypes = {
  contributions: PropTypes.arrayOf(PropTypes.number)
}

WeeklyContribution.defaultProps = {
  contributions: [0, 0, 0, 0, 0, 0, 0]
}

export default WeeklyContribution