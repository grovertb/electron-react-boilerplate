// @flow
// import React, { Component } from 'react'
import { connect } from 'react-redux';

import Prueba from '../../components/Prueba';
import counterDucks from '../../reducers/counter';

// class PruebaPage extends Component<Props> {
//   render() {
//     return <Prueba />
//   }
// }

export default connect(
  ({ counter }) => ({
    counter
  }),
  {
    increment: counterDucks.creators.increment,
    decrement: counterDucks.creators.decrement
  }
)(Prueba);
