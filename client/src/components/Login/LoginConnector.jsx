import Login from './Login'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserInfoAction } from '../../redux/actions/userActions';

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getUserInfoAction
        },
        dispatch
    );
}

  export default connect(mapStateToProps, mapDispatchToProps)(Login);