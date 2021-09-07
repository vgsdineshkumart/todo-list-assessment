import {loginAction} from './model';
import Pure from './Pure';
import { connect } from 'react-redux'

export const s = state => ({
    loggedIn: state.login.loggedIn
})

export const d = dispatch => ({
    login: (payload) => dispatch(loginAction(payload))
})

export default connect(s, d)(Pure)