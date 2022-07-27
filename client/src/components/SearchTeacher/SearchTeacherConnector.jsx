import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getChoosenTeacherIndex, getSelectedTeachers } from '../../redux/selectors/teachersSelectors'
import SearchTeacher from './SearchTeacher';
import { fetchTeachersAction, chooseTeacherAction } from '../../redux/actions/teachersActions';
import { getSelectedSubjects } from "../../redux/selectors/subjectsSelector"

const mapStateToProps = state => {
    const choosenTeacherIndex = getChoosenTeacherIndex(state);
    const selectedSubjects = getSelectedSubjects(state);
    const selectedTeachers = getSelectedTeachers(state, selectedSubjects);
    return { choosenTeacherIndex, selectedTeachers } ;
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            fetchTeachersAction, chooseTeacherAction
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTeacher);