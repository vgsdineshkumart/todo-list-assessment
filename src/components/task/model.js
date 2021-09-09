import {createAction, createReducer} from 'redux-act';
import {call, put, takeLatest} from 'redux-saga/effects';
import httpClient from '../../core/httpClient';
import {API_ENDPOINT} from '../../App';
import { fetchDashboardDataAction } from '../dashboard/model';

export const fetchTasksAction  = createAction('Fetch all tasks')
export const fetchTasksSuccessAction  = createAction('Fetch all tasks successful')
export const fetchTasksFailureAction  = createAction('Fetch all tasks failed')
export const showDetailsModalAction = createAction('Show/Hide task details modal')
export const submitTaskDetailsAction = createAction('Submitting task details')
export const clearTaskDetailsAction = createAction('Clearing task details')
export const deleteTaskDetailsAction = createAction('Deleting task details')
export const updateTaskDetailsAction = createAction('Updating task details')

export const defaultState = {
    showDetailsModal: false,
    taskDetails: {},
    tasksList: []
}

const fetchTasks = () => {
    return httpClient.get(`${API_ENDPOINT}/tasks`)
}

const createTaskDetails = (reqData) => {
    return httpClient.post(`${API_ENDPOINT}/tasks`, reqData)
}

const updateTaskDetails = (reqData, id) => {
    return httpClient.put(`${API_ENDPOINT}/tasks/${id}`, reqData)
}

const deleteTaskDetails = (id) => {
    return httpClient.delete(`${API_ENDPOINT}/tasks/${id}`)
}

export function * fetchTasksSaga () {
    try {
        const response = yield call(fetchTasks)
        if (response) {
            yield put(fetchTasksSuccessAction(response.tasks))
        } else {
            yield put(fetchTasksFailureAction([]))
        }
    } catch(error) {
        console.error('fetchTasksSaga error:', error)
        yield put(fetchTasksFailureAction([]))
    }
}

export function * submitTaskDetailsSaga ({ payload }) {
    try {
        const { taskDetails } = payload
        const response = !taskDetails._id ? yield call(createTaskDetails, payload.taskDetails) : yield call(updateTaskDetails, payload.taskDetails, taskDetails._id)
        if (response) {
            yield put(clearTaskDetailsAction())
            yield put(fetchTasksAction())
            yield put(fetchDashboardDataAction())
        }
    } catch(error) {
        console.error('submitTaskDetailsSaga error:', error)
    }
}

export function * deleteTaskDetailsSaga ({ payload }) {
    try {
        const { taskDetails } = payload
        const response = yield call(deleteTaskDetails, taskDetails._id)
        if (response) {
            yield put(clearTaskDetailsAction())
            yield put(fetchTasksAction())
            yield put(fetchDashboardDataAction())
        }
    } catch(error) {
        console.error('deleteTaskDetailsSaga error:', error)
    }
}

export const taskSagas = function * () {
    yield takeLatest(fetchTasksAction, fetchTasksSaga)
    yield takeLatest(submitTaskDetailsAction, submitTaskDetailsSaga)
    yield takeLatest(deleteTaskDetailsAction, deleteTaskDetailsSaga)
}

export const taskReducers = createReducer({
    [showDetailsModalAction]: (state, flag) => ({
        ...state,
        showDetailsModal: flag
    }),
    [updateTaskDetailsAction]: (state, taskDetails) => ({
        ...state,
        taskDetails
    }),
    [clearTaskDetailsAction]: (state) => ({
        ...state,
        taskDetails: {},
        showDetailsModal: false
    }),
    [fetchTasksSuccessAction]: (state, tasksList) => ({
        ...state,
        tasksList
    }),
    [fetchTasksFailureAction]: (state, tasksList) => ({
        ...state,
        tasksList
    })
}, defaultState)
