import React, { FunctionComponent } from 'react'
import { Route, Switch } from 'react-router-dom'

import { ProtectedRoute } from './protectedRoute/index'
import LoginPage from './components/loginPage/index'
import TodoMain from './components/todo/index'

const Main: FunctionComponent = () => {
  const errorMessage = '404 NOT FOUND'

  return (
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <ProtectedRoute exact path="/todo" component={TodoMain} />
        <Route path="*" component={(): any => errorMessage} />
      </Switch>
    </div>
  )
}

export default Main
