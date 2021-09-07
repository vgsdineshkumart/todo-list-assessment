import { connect } from 'react-redux';
import { logoutAction } from '../login/model';
import Pure from './Pure';

export const s = state => ({
    userName: state.login.loggedInUserName,
    profilePicUrl: state.login.loggedInUserPic
})

export const d = dispatch => ({
    logout: () => dispatch(logoutAction())
})

export default connect(s, d)(Pure)