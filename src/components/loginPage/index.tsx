import React from 'react'
import styled from 'styled-components'
import auth from '../Auth/index'

import Invite from './invite'
import GoogleButton from './GoogleButton/index'

const LoginPage = (props: any) => {
  return (
    <MainDiv>
      <Invite title="Welcome!" paragraph="To this example"></Invite>
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
