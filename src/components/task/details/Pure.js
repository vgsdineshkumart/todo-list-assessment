import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Error, Input } from '../../common/styled-components';

const Pure = ({
  showDetailsModal,
  submitTaskDetails,
  taskDetails = {}
}) => {

  const [taskName, setTaskName] = useState(taskDetails.name || '')
  const [errors, setErrors] = React.useState({
    taskName: false
  })

  const closeModal = $event => {
    if ($event.target.getAttribute('type') === 'modal') {
      showDetailsModal && showDetailsModal(false)
    }
  }

  const updateTaskName = $event => {
    setTaskName($event.target.value);
    if (!$event.target.value) {
      setErrors({
        taskName: true
      })
    } else {
      setErrors({
        taskName: false
      })
    }
  }

  const submitTask = () => {
    setErrors({
      taskName: false
    })
    if (!taskName) {
      setErrors({
        ...errors,
        taskName: true
      })
    }
    submitTaskDetails && submitTaskDetails({
      ...taskDetails,
      name: taskName,
      _id: taskDetails._id || undefined,
      completed: false
    })
  }

  const handleEnterKey = $event => {
    const key = $event.keyCode || $event.which
    if (key === 13) {
      submitTask()
    }
  }

  return (
    <Modal type='modal' onClick={closeModal}>
      <Wrapper>
        <Title>{taskDetails._id ? 'Update Task' : '+ New Task'}</Title>
        <Input type='text' name='taskName' onKeyUp={handleEnterKey} onChange={updateTaskName} value={taskName} placeholder='Task Name' />
        {errors.taskName && <Error>Please enter valid task name</Error>}
        <SubmitButton type='button' onClick={submitTask}>{taskDetails._id ? 'Update Task' : '+ New Task'}</SubmitButton>
      </Wrapper>
    </Modal>
  );
}

const Modal = styled.div`
  position: fixed;
  z-index: 99;
  background: #00000033 0% 0% no-repeat padding-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 296px;
  max-height: 193px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 24px 28px 30px 24px;
`

const Title = styled.label`
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

const SubmitButton = styled(Button)`
  width: 100%;
`

export default Pure