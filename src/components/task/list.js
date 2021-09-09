import styled from 'styled-components'
import EditIconSrc from '../../assets/imgs/pen-solid.svg'
import DeleteIconSrc from '../../assets/imgs/trash-solid.svg'
import Checkbox from '../common/checkbox'

const TasksList = ({
  tasks,
  updateTaskDetails,
  deleteTaskDetails,
  submitTaskDetails,
  showDetailsModal
}) => {

  const updateTaskStatus = ($event, task) => {
    submitTaskDetails({
      ...task,
      completed: $event.target.checked
    })
  }

  const showTaskDetailsModal = task => {
    updateTaskDetails(task)
    showDetailsModal(true)
  }

  return (
    <ListWrapper>
      {
        tasks.map((task, index) => {
          return (
            <TaskInfo key={task._id}>
              <InnerWrapper>
                <Checkbox checked={task.completed} onChange={($event) => updateTaskStatus($event, task)} />
                <TaskName completed={task.completed}>{task.name}</TaskName>
                <EditIcon onClick={() => showTaskDetailsModal(task)} />
                <DeleteIcon onClick={() => deleteTaskDetails(task)} />
              </InnerWrapper>
              {index < tasks.length - 1 && <RowDivider />}
            </TaskInfo>
          )
        })
      }
    </ListWrapper>
  )
}

const ListWrapper = styled.div`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000014;
  border-radius: 12px;
  margin-top: 10px;
  width: 100%;
`

const TaskInfo = styled.div`
  padding: 0px 13px 0px 16px;
  @media screen and (min-width: 1024px) {
    padding: 0px 35px 0px 24px;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
`

// const Checkbox = styled.input``

const TaskName = styled.div`
  text-align: left;
  // font: normal normal medium 20px/24px Montserrat;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0px;
  color: ${p => p.completed ? '#537178' : '#5285EC' };
  text-decoration: ${p => p.completed ? 'line-through' : 'none'};
  padding-left: 12px;
  flex: 2;
`

const EditIcon = styled.div`
  width: 16px;
  height: 16px;
  padding-right: 17px;
  background: transparent url('${EditIconSrc}') 0% 0% no-repeat padding-box;
  cursor: pointer;
`

const DeleteIcon = styled.div`
  width: 16px;
  height: 18px;
  background: transparent url('${DeleteIconSrc}') 0% 0% no-repeat padding-box;
  cursor: pointer;
`

const RowDivider = styled.hr`
  width: 100%;
  border-top: 1px solid #E8E8E8;
  margin: 0px;
`

export default TasksList