import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './containers/Root'
import store, { history } from './store/configureStore'
import createRoutes from './routes'
import './app.global.css'

const routes = createRoutes(history)

render(
  <AppContainer>
    <Root history={history} store={store}>
      {routes}
    </Root>
  </AppContainer>,
  document.getElementById('root')
)

if(module.hot)
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root') // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot history={history} store={store}>
          {routes}
        </NextRoot>
      </AppContainer>,
      document.getElementById('root')
    )
  })
