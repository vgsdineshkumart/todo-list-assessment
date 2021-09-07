import React from 'react';
import styled from 'styled-components';
import { CardWrapper } from '../common/card';
import Label from '../common/label';

const LatestTasks = ({
  tasks = []
}) => {
  return (
    <CardWrapper>
      <Label>Latest Created Tasks</Label>
      <LatestTasksWrapper>
        {
          (tasks || []).slice(0, 3).map(task => {
            return <TaskDetails key={task._id} completed={task.completed}>
              <Text>{task.name}</Text>
            </TaskDetails>
          })
        }
      </LatestTasksWrapper>
    </CardWrapper>
  )
}

const LatestTasksWrapper = styled.ul`
    margin: 5px;
    padding: 0px;
    padding-left: 16px;
`

const TaskDetails = styled.li`
  text-align: left;
  //font: normal normal medium 14px/26px Montserrat;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 0px;
  color: #8F9EA2;

  text-decoration: ${p => p.completed ? 'line-through' : 'none'}
`

const Text = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default LatestTasks