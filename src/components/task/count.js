import React from 'react';
import { CardWrapper } from '../common/card';
import Label from '../common/label';
import styled from 'styled-components';

const TasksCount = ({ completed, total }) => {
  return (
    <Wrapper>
      <Label>Tasks Completed</Label>
      <CountWrapper>
        <CompletedLabel>{completed}</CompletedLabel>
        <TotalLabel>/{total}</TotalLabel>
      </CountWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(CardWrapper)`
  margin-left: 0px;
`

const CountWrapper = styled.div`
  padding-top: 5px;
`

const CompletedLabel = styled.label`
  text-align: left;
  //font: normal normal medium 64px/78px Montserrat;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 78px;
  letter-spacing: 0px;
  color: #5285EC;
`

const TotalLabel = styled.label`
  text-align: left;
  //font: normal normal medium 64px/78px Montserrat;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0px;
  color: #8F9EA2;
`

export default TasksCount
