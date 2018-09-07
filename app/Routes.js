/* eslint flowtype-errors/show-errors: 0 */
import React from 'react'
import { Switch, Route } from 'react-router'
import routes from './constants/routes.json'
import App from './containers/App'
import HomePage from './containers/app/HomePage'
import CounterPage from './containers/app/CounterPage'
import PruebaPage from './containers/app/PruebaPage'

export default () => (
  <App>
    <Switch>
      <Route component={CounterPage} path={routes.COUNTER} />
      <Route component={PruebaPage} path={routes.PRUEBA} />
      <Route component={HomePage} initial path={routes.HOME} />
    </Switch>
  </App>
)
