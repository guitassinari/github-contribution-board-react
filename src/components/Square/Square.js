import PropTypes from 'prop-types'
import styled from 'styled-components'

const Square = styled.div`
  width: 100%;

  &:after {
    content: "";
    display: block;
    background-color: ${props => props.backgroundColor};
    padding-bottom: 100%;
  }
`

Square.propTypes = {
  backgroundColor: PropTypes.string
}

Square.defaultProps = {
  backgroundColor: "#EBEDF0"
}

export default Square