import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import {getPassword } from '../module/user_module';

import GetPassword from '../components/GetPassword';

function mapStateToProps(state) {
    return {
        data: state.base.data
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getPassword}, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GetPassword))
