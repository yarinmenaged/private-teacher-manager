import Login from './Login'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserInfoAction } from '../../redux/actions/userActions';
import { getLoginStatus, getIfIncorrectPassword } from '../../redux/selectors/userSelectors';
import { getAllSubjectsAction } from '../../redux/actions/subjectsAction'

const mapStateToProps = state => {
    return {
         loginStatus: getLoginStatus(state),
         incorrectPassword: getIfIncorrectPassword(state),
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getUserInfoAction, getAllSubjectsAction
        },
        dispatch
    );
}

  export default connect(mapStateToProps, mapDispatchToProps)(Login);