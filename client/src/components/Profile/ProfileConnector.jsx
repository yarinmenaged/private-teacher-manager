import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserInfo } from '../../redux/selectors/userSelectors';
import Profile from './Profile';
import { editAboutAction } from '../../redux/actions/userActions';
import { getChoosenTeacher } from '../../redux/selectors/teachersSelectors'

const mapStateToProps = state => {
    const userInfo = getUserInfo(state);
    const chosenTeacher = getChoosenTeacher(state);
    return { userInfo, chosenTeacher } ;
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