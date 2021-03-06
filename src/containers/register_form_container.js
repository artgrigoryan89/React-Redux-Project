import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerUser } from '../module';

import RegisterForm from '../components/RegisterForm';

function mapStateToProps(state) {
    return {
        data: state.user.data
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators( {registerUser}, dispatch );
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)