import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TasksList from './list';
import SearchIconSrc from '../../assets/imgs/search-solid.svg'
import { Button, Input } from '../common/styled-components';

const Pure = ({
  tasks = [],
  fetchTasks,
  showDetailsModal,
  updateTaskDetails,
  deleteTaskDetails,
  submitTaskDetails
}) => {
  const [filteredTasks, setFilteredTasks] = useState(tasks)

  useEffect(() => {
    fetchTasks && fetchTasks()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setFilteredTasks(tasks)
  }, [tasks])

  const filterTasks = $event => {
    const searchVal = $event.target.value.toLowerCase()
    if (searchVal) {
      setFilteredTasks(tasks.filter(task => task.name.toLowerCase().indexOf(searchVal) !== -1))
    } else {
      setFilteredTasks(tasks)
    }
  }

  return (
    <Wrapper>
      <TitleWrapper>
        <LeftPanel>
          <Title>Tasks</Title>
        </LeftPanel>
        <RightPanel>
          <SearchWrapper>
            <SearchIcon />
            <SearchInput type='text' name='searchItem' onChange={filterTasks} placeholder={'Search by task name'} />
          </SearchWrapper>
          <AddButton type={'button'} onClick={() => showDetailsModal(true)}>+ New Task</AddButton>
        </RightPanel>
      </TitleWrapper>
      <TasksList tasks={filteredTasks} showDetailsModal={showDetailsModal} submitTaskDetails={submitTaskDetails} updateTaskDetails={updateTaskDetails} deleteTaskDetails={deleteTaskDetails} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`

const LeftPanel = styled.div`
  flex-basis: 50%;
  margin-bottom: 8px;
`

const Title = styled.label`
  justify-content: flex-start;
  //font: normal normal medium 20px/24px Montserrat;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0px;
  color: #537178;
`

const RightPanel = styled.div`
  width: 100%;
  @media screen and (min-width: 1024px) {
    justify-content: flex-end;
    flex-basis: 50%;
    display: flex;
  }
`

const SearchWrapper = styled.div`
  position: relative;
`

const SearchIcon = styled.div`
  width: 16px;
  height: 16px;
  left: 15px;
  top: 12px;
  background: transparent url('${SearchIconSrc}') 0% 0% no-repeat padding-box;
  position: absolute;
`

const SearchInput = styled(Input)`
  background: #D9DFEB 0% 0% no-repeat padding-box;
  margin-bottom: 0px;
  margin-right: 12px;
  padding-left: 40px;
  @media screen and (max-width: 1023px) {
    width: calc(100% - 40px);
    margin: 0px;
    margin-bottom: 8px;
  }
`

const AddButton = styled(Button)`
  @media screen and (max-width: 1023px) {
    width: 100%;
  }
`

export default Pure
