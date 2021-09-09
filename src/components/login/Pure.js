import React from 'react'
import styled from 'styled-components';
import { Button, Error, Input } from '../common/styled-components';

const Pure = props => {
  const [id, setId] = React.useState('')
  const [userName, setUserName] = React.useState('')
  const [errors, setErrors] = React.useState({
    userId: false,
    userName: false
  })

  const updateUserName = $event => {
    setUserName($event.target.value)
    if (!$event.target.value) {
      setErrors({
        ...errors,
        userId: true
      })
    } else {
      setErrors({
        ...errors,
        userId: false
      })
    }
  }

  const updateId = $event => {
    setId($event.target.value)
    if (!$event.target.value) {
      setErrors({
        ...errors,
        userName: true
      })
    } else {
      setErrors({
        ...errors,
        userName: false
      })
    }
  }

  const handleEnterKey = $event => {
    const key = $event.keyCode || $event.which
    if (key === 13) {
      handleLoginClick()
    }
  }

  const handleLoginClick = () => {
    setErrors({
      userId: false,
      userName: false
    })
    if (!id) {
      setErrors({
        ...errors,
        userId: true
      })
    } 
    if (!userName) {
      setErrors({
        ...errors,
        userName: true
      })
    }
    props.login({
      userName,
      id
    })
  }

  return (
    <Wrapper>
      <LoginPanel>
        <LoginLabel>Login</LoginLabel>
        <Input type='text' name={'userId'} onKeyUp={handleEnterKey} onChange={updateId} placeholder={'Id'} />
        {errors.userId && <Error>Please enter valid id</Error>}
        <Input type='text' name={'userName'} onKeyUp={handleEnterKey} onChange={updateUserName} placeholder={'Name'} />
        {errors.userName && <Error>Please enter valid user name</Error>}
        <LoginButton type='button' onClick={handleLoginClick}>Login</LoginButton>
      </LoginPanel>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoginPanel = styled.div`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 12px;
  height: 249px;
  width: 296px;
  display: flex;
  flex-direction: column;
  padding: 24px 28px 24px 24px;
`

const LoginLabel = styled.label`
  text-align: left;
  //font: normal normal medium 20px/24px Montserrat;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;  
  letter-spacing: 0px;
  color: #537178;
  padding-bottom: 24px;
`

const LoginButton = styled(Button)`
  width: 100%;
`

export default Pure