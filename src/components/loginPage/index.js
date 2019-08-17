import React from 'react'
import styled from 'styled-components'
import auth from '../Auth/index'

import GoogleButton from '../loginPage/GoogleButton/index'

const LoginPage = props => {
  return (
    <MainDiv>
      <div
        onClick={() =>
          auth.login(() => {
            props.history.push('/todo')
          })
        }>
        <GoogleButton />
      </div>
    </MainDiv>
  )
}

export default LoginPage

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: -60px;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: auto;
`
