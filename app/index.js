import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.css';

const store = configureStore();

render(
  <AppContainer>
    <Root history={history} store={store} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot)
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot history={history} store={store} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
