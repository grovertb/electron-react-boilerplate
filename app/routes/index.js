import React from 'react'
import { Switch, Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import routes from '../constants/routes.json'
import { HomePage, CounterPage } from '../containers'

export default history => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route component={CounterPage} path={routes.COUNTER} />
      <Route component={HomePage} path={routes.HOME} />
    </Switch>
  </ConnectedRouter>
)