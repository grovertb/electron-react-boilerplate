// @flow
import { connect } from 'react-redux'

import Prueba from '../../components/Prueba'
import counterDucks from '../../reducers/counter'

export default connect(
  ({ counter }) => ({
    counter
  }),
  {
    increment: counterDucks.creators.increment,
    decrement: counterDucks.creators.decrement
  }
)(Prueba)
