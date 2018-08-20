import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { getActiveUsers, getRemovedUsers, activateUser, removeUser, getData} from '../module/user_module';

import AdminPanel from '../components/AdminPanel';

function mapStateToProps(state) {
    return {
        data: state.base.data,
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({activateUser, removeUser, getData}, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminPanel))