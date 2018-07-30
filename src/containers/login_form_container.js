import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../module/user_module';

import LoginForm from '../components/LoginForm';

function mapStateToProps(state) {
    return {
        data: state.base.data
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({loginUser}, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))

