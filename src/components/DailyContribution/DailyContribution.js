import React from 'react'
import PropTypes from 'prop-types'
import Square from '../Square/Square.js'

const CONTRIBUTION_COLORS_SETTINGS = {
  NONE: { min: 0, max: 0, color: "#EBEDF0" },
  LOW: { min: 1, max: 2, color: "#9BE9A8"},
  MEDIUM: { min: 3, max: 5, color: "#40C463"},
  HIGH: { min: 6, max: 8, color: "#30A14E"},
  VERY_HIGH: { min: 9, max: Infinity, color: "#216E39"}
}

function getContributionBackgroundColor(contributionCount) {
  if(!contributionCount) {
    return CONTRIBUTION_COLORS_SETTINGS.NONE.COLOR
  }

  const allSettings = Object.values(CONTRIBUTION_COLORS_SETTINGS)
  const contributionIntensity = allSettings.find(settings => {
    return contributionCount >= settings.min &&
           contributionCount <= settings.max
  })

  return contributionIntensity.color
}

function DailyContribution({ count }) {
  const backgroundColor = getContributionBackgroundColor(count)

  return (
    <Square backgroundColor={backgroundColor} />
  )
}

DailyContribution.propTypes = {
  count: PropTypes.number.isRequired
}

DailyContribution.defaultProps = {
  count: 0
}

export default DailyContribution