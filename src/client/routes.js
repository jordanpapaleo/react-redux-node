import React from 'react'
import { Route } from 'react-router'

import App from './containers/App'

const routes = (
  <Route>
    <Route path="/" component={App}></Route>
  </Route>
)

export default routes
