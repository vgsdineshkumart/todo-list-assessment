import { createAction, createReducer } from 'redux-act';
import { takeLatest, call, put } from 'redux-saga/effects'
import httpClient from '../../core/httpClient';
import { API_ENDPOINT } from '../../App';

export const fetchDashboardDataAction = createAction('Fetch dashboard data')
export const fetchDashboardDataSuccessAction = createAction('Fetch dashboard data success')
export const fetchDashboardDataFailureAction = createAction('Fetch dashboard data failed')

export const defaultState = {
  dashboardData: {
    totalTasks: 0,
    tasksCompleted: 0,
    latestTasks: []
  }
}

const fetchDashboardData = () => {
  return httpClient.get(`${API_ENDPOINT}/dashboard`)
}

export function* fetchDashboardDataSaga() {
  try {
    const response = yield call(fetchDashboardData)
    if (response) {
      yield put(fetchDashboardDataSuccessAction(response))
    }
  } catch (error) {
    console.error('fetchDashboardDataSaga error:', error)
  }
}

export const dashboardSagas = function* () {
  yield takeLatest(fetchDashboardDataAction, fetchDashboardDataSaga)
}

export const dashboardReducer = createReducer({
  [fetchDashboardDataSuccessAction]: (state, dashboardData) => ({
    ...state,
    dashboardData
  }),
  [fetchDashboardDataFailureAction]: (state) => ({
    ...state,
    dashboardData: defaultState.dashboardData
  })
}, defaultState)
