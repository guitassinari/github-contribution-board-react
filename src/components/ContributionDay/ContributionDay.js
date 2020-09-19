import React from 'react'
import PropTypes from 'prop-types'
import Square from '../Square/Square.js'

function ContributionDay({ count }) {
  let backgroundColor = "#EBEDF0"
  if(count > 0 && count <= 2) {
    backgroundColor = "#9BE9A8"
  } else if(count > 2 && count <= 5) {
    backgroundColor = "#40C463"
  } else if(count > 5 && count <= 8) {
    backgroundColor = "#30A14E"
  } else if(count > 8) {
    backgroundColor = "#216E39"
  }
  return (
    <Square backgroundColor={backgroundColor} />
  )
}

ContributionDay.propTypes = {
  count: PropTypes.number.isRequired
}

ContributionDay.defaultProps = {
  count: 0
}

export default ContributionDay