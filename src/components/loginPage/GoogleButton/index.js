import React from 'react'
import styled from 'styled-components'

const GoogleButton = () => {
  return (
    <GoogleBtn>
      <GoogleIconWrapper>
        <GoogleIcon src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
      </GoogleIconWrapper>
      <ButtonText>
        <b>Sign in with Google</b>
      </ButtonText>
    </GoogleBtn>
  )
}

export default GoogleButton

const GoogleBtn = styled.div`
  margin: 25px;
  width: 80%;
  min-width: 184px;
  max-width: 200px;
  height: 42px;
  background-color: #fcfcfc;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  cursor: hand;
  align-self: center;
  user-select: none;
  transition: all 400ms ease 0s;
  display: flex;
`
const GoogleIconWrapper = styled.div`
  position: absolute;
  margin-top: 1px;
  margin-left: 1px;
  width: 40px;
  height: 40px;
  border-radius: 2px;
  user-select: none;
`
const GoogleIcon = styled.img`
  position: absolute;
  margin-top: 11px;
  margin-left: 11px;
  width: 18px;
  height: 18px;
  user-select: none;
`
const ButtonText = styled.p`
  float: right;
  margin: 11px 14px 40px 40px;
  color: #757575;
  font-size: 14px;
  letter-spacing: 0.2px;
  user-select: none;
`
