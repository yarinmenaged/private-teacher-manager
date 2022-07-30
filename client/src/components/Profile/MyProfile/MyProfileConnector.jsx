import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserInfo, getTeacherSubjects } from '../../../redux/selectors/userSelector';
import MyProfile from './MyProfile';
import { editAboutAction } from '../../../redux/actions/userActions';
import { getSubjects } from '../../../redux/selectors/subjectsSelector';

const mapStateToProps = state => {
    const userInfo = getUserInfo(state);
    const allSubjects = getSubjects(state);
    const teacheSubjects = getTeacherSubjects(state);
    return { userInfo, allSubjects, teacheSubjects } ;
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            editAboutAction
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);