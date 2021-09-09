import React from 'react'
import Header from '../header'
import styled from 'styled-components';
import Nodata from './Nodata';
import TasksCount from '../task/count';
import LatestTasks from '../task/latest';
import TasksChart from '../task/chart';
import Tasks from '../task';
import TaskDetails from '../task/details';

const Pure = ({
  dashboardData,
  fetchDashboardData,
  showTaskDetails,
  showDetailsModal
}) => {

  React.useEffect(() => {
    fetchDashboardData()
    // eslint-disable-next-line
  }, [])

  let bodyContainer = <></>

  if (!dashboardData || dashboardData.totalTasks === 0) {
    bodyContainer = <Nodata showDetailsModal={showDetailsModal} />
  } else {
    bodyContainer = (
      <BodyWrapper>
        <InnerWrapper>
          <TasksCount completed={dashboardData.tasksCompleted} total={dashboardData.totalTasks} />
          <LatestTasks tasks={dashboardData.latestTasks} />
          <TasksChart completed={dashboardData.tasksCompleted} total={dashboardData.totalTasks} />
        </InnerWrapper>
        <Tasks />
      </BodyWrapper>
    )
  }

  return (
    <Wrapper>
      <Header />
      <Container>
        {bodyContainer}
      </Container>
      {showTaskDetails && <TaskDetails />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #F4F4F6 0% 0% no-repeat padding-box;
  opacity: 1;
  
  width: 100%;
  height: 100%;
`

const Container = styled.div`
  padding-top: 94px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px 20px;

  @media screen and (min-width: 1024px) {
    padding: 0px 120px;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`

export default Pure