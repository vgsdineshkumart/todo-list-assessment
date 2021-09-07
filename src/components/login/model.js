import { createAction, createReducer } from 'redux-act';
import { takeLatest, call, put } from 'redux-saga/effects'
import httpClient from '../../core/httpClient';
import { API_ENDPOINT } from '../../App';
import { history } from '../../core/store';

export const loginAction = createAction('Login')
const loginSuccessAction = createAction('Login success')
const loginFailureAction = createAction('Login failed')
export const logoutAction = createAction('Logout user')

const USER_DATA = JSON.parse(sessionStorage.getItem('USER_DATA') || '{}')

const defaultState = {
  loggedIn: false,
  loggedInUserToken: '',
  loginError: '',
  loggedInUserName: USER_DATA.userName || '',
  loggedInUserPic: USER_DATA.picUrl || ''
}

const login = reqData => {
  return httpClient.post(`${API_ENDPOINT}/login`, reqData)
}

export function* loginSaga({ payload }) {
  try {
    const { userName } = payload
    const response = yield call(login, {
      name: userName,
      apiKey: '0211b92f9594a5ac'
    })
    if (response) {
      sessionStorage.setItem('AUTH_KEY', response.token.token);
      sessionStorage.setItem('USER_DATA', JSON.stringify({
        userName,
        picUrl: response.image
      }))
      yield put(loginSuccessAction({
        token: response.token.token,
        userName,
        picUrl: response.image
      }))
      yield history.push('/dashboard')
    }
  } catch (error) {
    console.error('loginSaga error:', error)
  }
}

export function * logoutSaga() {
  sessionStorage.removeItem('AUTH_KEY');
  sessionStorage.removeItem('USER_DATA')
  yield history.push('/login')
}

export const loginSagas = function* () {
  yield takeLatest(loginAction, loginSaga)
  yield takeLatest(logoutAction, logoutSaga)
}

export const loginReducer = createReducer({
  [loginSuccessAction]: (state, payload) => ({
    ...state,
    loggedInUserToken: payload.token,
    loggedInUserPic: payload.picUrl,
    loggedIn: true,
    loggedInUserName: payload.userName
  }),
  [loginFailureAction]: (state, error) => ({
    ...state,
    loginError: error,
    loggedIn: false
  })
}, defaultState)
