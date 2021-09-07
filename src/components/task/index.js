import Pure from './Pure';
import { connect } from 'react-redux'
import { deleteTaskDetailsAction, fetchTasksAction, showDetailsModalAction, submitTaskDetailsAction, updateTaskDetailsAction } from './model';

export const s = state => ({
  tasks: state.task.tasksList
})

export const d = dispatch => ({
  fetchTasks: () => dispatch(fetchTasksAction()),
  showDetailsModal: (payload) => dispatch(showDetailsModalAction(payload)),
  updateTaskDetails: (payload) => dispatch(updateTaskDetailsAction(payload)),
  deleteTaskDetails: (payload) => dispatch(deleteTaskDetailsAction({
    taskDetails: payload
  })),
  submitTaskDetails: (payload) => dispatch(submitTaskDetailsAction({
    taskDetails: payload
  }))
})

export default connect(s, d)(Pure)