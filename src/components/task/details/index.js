
import Pure from './Pure';
import { connect } from 'react-redux'
import {showDetailsModalAction, submitTaskDetailsAction} from '../model';

export const s = state => ({
    taskDetails: state.task.taskDetails
})

export const d = dispatch => ({
    showDetailsModal: (payload) => dispatch(showDetailsModalAction(payload)),
    submitTaskDetails: (payload) => dispatch(submitTaskDetailsAction({taskDetails: payload}))
})

export default connect(s, d)(Pure)