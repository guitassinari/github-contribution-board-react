import React from 'react'
import PropTypes from 'prop-types'
import WeeklyContribution from '../WeeklyContribution/WeeklyContribution.js'
import styled from 'styled-components'
import { splitArrayIntoChunksOf } from '../../helpers/array'

const WEEKS_PER_YEAR = 53

const ContributionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${WEEKS_PER_YEAR}, 1fr);
  grid-gap: 10px;
  padding: 10px;
  border: solid 1px black;
  border-radius: 5px;
`

const NUMBER_OF_WEEK_DAYS = 7

function ContributionBoard({ contributions }) {
  const filteredContributions = (contributions || [])
  const contributionsWeekChunks = splitArrayIntoChunksOf(NUMBER_OF_WEEK_DAYS, filteredContributions) 
  return (
    <ContributionsContainer>
      {contributionsWeekChunks.map((weekContributions, index) => <WeeklyContribution key={index} contributions={weekContributions} />)}
    </ContributionsContainer>
  )
}

ContributionBoard.propTypes = {
  contributions: PropTypes.arrayOf(PropTypes.number)
}

ContributionBoard.defaultProps = {
  contributions: []
}

export default ContributionBoard