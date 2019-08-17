import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ProtectedRoute } from './protectedRoute/index'
import LoginPage from './components/loginPage/index'
import TodoMain from './components/todo/index'

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <ProtectedRoute exact path="/todo" component={TodoMain} />
        <Route path="*" component={() => '404 NOT FOUND'} />
      </Switch>
    </div>
  )
}

export default Main
