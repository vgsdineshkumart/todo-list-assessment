import React from 'react';
import styled from 'styled-components';
import { API_ENDPOINT } from '../../App';

const Pure = ({
  userName,
  profilePicUrl,
  logout
}) => {
  return <Container>
    <Wrapper>
      <InnerWrapper>
        <LeftPanel>
          <ProfilePicImg src={`${API_ENDPOINT}/${profilePicUrl}`} />
          <UserNameLabel>{userName}</UserNameLabel>
        </LeftPanel>
        <RightPanel>
          <LogoutLabel onClick={logout}>Logout</LogoutLabel>
        </RightPanel>
      </InnerWrapper>
    </Wrapper>
  </Container>
}

const Container = styled.div`
  width: 100%;
  height: 72px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  position: fixed;
`

const Wrapper = styled.div`
  width: auto;
  height: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 24px;
  height: 100%;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #6D8187;
  width: auto;

  @media screen and (min-width: 1024px) {
    padding: 0px 120px;
  }
`

const LeftPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-basis: 50%;
  align-items: center;
`

const RightPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-basis: 50%;
  align-items: center;
`

const ProfilePicImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`

const UserNameLabel = styled.label`
  text-align: left;
  padding-left: 16px;
`

const LogoutLabel = styled.span`
  text-align: right;
  cursor: pointer;
`

export default Pure