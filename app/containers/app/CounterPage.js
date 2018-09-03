import { connect } from 'react-redux'

import Counter from '../../components/Counter'
import counterDucks from '../../reducers/counter'

export default connect(
  ({ counter }) => ({
    counter
  }),
  {
    increment: counterDucks.creators.increment,
    decrement: counterDucks.creators.decrement
  }
)(Counter)
