import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, routerReducer, syncHistoryWithStore } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga'
import * as login from '../components/login/model';
import * as dashboard from '../components/dashboard/model';
import * as task from '../components/task/model';

const appDefaultState = {}

const allReducers = combineReducers({
  routing: routerReducer,
  login: login.loginReducer,
  dashboard: dashboard.dashboardReducer,
  task: task.taskReducers
})

const rootReducer = (state, action) => {
  if (action && (
    action.type === 'Logout user' ||
    (action.type === '@@router/LOCATION_CHANGE' && /login$/.test(window.location.pathname)))) {
    state = {}
  }
  return allReducers(state, action)
}

const browserHistory = createBrowserHistory()

const reduxRouterMiddleware = routerMiddleware(browserHistory)

export const sagaMiddleWare = createSagaMiddleware()

const { composeWithDevTools } = require('redux-devtools-extension')
const appMiddleWares = applyMiddleware(
  sagaMiddleWare,
  reduxRouterMiddleware
)

const store = createStore(rootReducer, appDefaultState, composeWithDevTools(appMiddleWares))

export const history = syncHistoryWithStore(browserHistory, store)
export const rootSagas = [
  login.loginSagas,
  dashboard.dashboardSagas,
  task.taskSagas
]
rootSagas.forEach(sagaMiddleWare.run)

export default store