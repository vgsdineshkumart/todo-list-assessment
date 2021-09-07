import { createAction, createReducer } from 'redux-act';
import { takeLatest, call, put } from 'redux-saga/effects'
import httpClient from '../../core/httpClient';
import { API_ENDPOINT } from '../../App';

export const fetchDashboardDataAction = createAction('Fetch dashboard data')
const fetchDashboardDataSuccessAction = createAction('Fetch dashboard data success')
const fetchDashboardDataFailureAction = createAction('Fetch dashboard data failed')

const defaultState = {
  dashboardData: {}
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
    dashboardData: {}
  })
}, defaultState)
