// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import type { Store } from '../reducers/types';

type Props = {
  store: Store,
  history: {}
};

export default class Root extends Component<Props> {
  render() {
    const { store, children } = this.props;

    return <Provider store={store}>{children}</Provider>;
  }
}
