import React, { FunctionComponent } from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from '../components/Auth/index'

interface Props {
  component: any
  exact: boolean
  path: string
}

export const ProtectedRoute: FunctionComponent<Props> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated()) {
          return <Component {...props} />
        } else {
          return <Redirect to="/" />
        }
      }}
    />
  )
}
