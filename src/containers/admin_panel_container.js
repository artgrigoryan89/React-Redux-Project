import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { getActiveUsers, getRemovedUsers, activateUser, removeUser  } from '../module/user_module';

import AdminPanel from '../components/AdminPanel';

function mapStateToProps(state) {
    return {
        data: state.base.data,
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getActiveUsers, getRemovedUsers, activateUser, removeUser}, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminPanel))