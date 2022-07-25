import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserInfo } from '../../redux/selectors/userSelectors';
import Profile from './Profile';
import { editAboutAction } from '../../redux/actions/userActions';

const mapStateToProps = state => {
    const userInfo = getUserInfo(state);
    return { userInfo } ;
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            editAboutAction, 
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);