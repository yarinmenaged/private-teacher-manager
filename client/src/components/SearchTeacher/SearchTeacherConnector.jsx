import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSelectedTeachers, getAreTeachersFetched} from '../../redux/selectors/teachersSelectors'
import SearchTeacher from './SearchTeacher';
import { fetchTeachersAction, chooseTeacherAction } from '../../redux/actions/teachersActions';
import { getSelectedSubjects } from "../../redux/selectors/subjectsSelector";
import { getAllSubjectsAction } from '../../redux/actions/subjectsAction';

const mapStateToProps = state => {
    const areTeachersFetched = getAreTeachersFetched(state);
    const selectedSubjects = getSelectedSubjects(state);
    const selectedTeachers = getSelectedTeachers(state, selectedSubjects);
    return {areTeachersFetched, selectedTeachers } ;
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            fetchTeachersAction, chooseTeacherAction, getAllSubjectsAction
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTeacher);