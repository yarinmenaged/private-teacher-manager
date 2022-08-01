import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSelectedTeachers, getAreTeachersFetched} from '../../redux/selectors/teachersSelector'
import SearchTeacher from './SearchTeacher';
import { fetchTeachersAction, chooseTeacherAction } from '../../redux/actions/teachersActions';
import { getSelectedSubjects } from "../../redux/selectors/subjectsSelector";
import { UnsetCalendarToUserAction } from '../../redux/actions/calendarActions';

const mapStateToProps = state => {
    const areTeachersFetched = getAreTeachersFetched(state);
    const selectedSubjects = getSelectedSubjects(state).map(subject => subject.Name);
    const selectedTeachers = getSelectedTeachers(state);
    return {areTeachersFetched, selectedTeachers } ;
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            fetchTeachersAction, chooseTeacherAction, UnsetCalendarToUserAction
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTeacher);