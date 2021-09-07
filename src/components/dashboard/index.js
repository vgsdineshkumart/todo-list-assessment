import { fetchDashboardDataAction } from './model';
import Pure from './Pure';
import { connect } from 'react-redux'
import { showDetailsModalAction } from '../task/model';

export const s = state => ({
  dashboardData: state.dashboard.dashboardData,
  showTaskDetails: state.task.showDetailsModal
})

export const d = dispatch => ({
  showDetailsModal: (payload) => dispatch(showDetailsModalAction(payload)),
  fetchDashboardData: () => dispatch(fetchDashboardDataAction())
})

export default connect(s, d)(Pure)