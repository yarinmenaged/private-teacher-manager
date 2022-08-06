import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSelectedTeachers, getAreTeachersFetched, getChosenTeacher } from '../../redux/selectors/teachersSelector'
import SearchTeacher from './SearchTeacher';
import { fetchTeachersAction, chooseTeacherAction } from '../../redux/actions/teachersActions';
import { UnsetCalendarToUserAction } from '../../redux/actions/calendarActions';
import { UnsetTeacherSettingsAction } from '../../redux/actions/settingsActions';

const mapStateToProps = state => {
    const areTeachersFetched = getAreTeachersFetched(state);
    const selectedTeachers = getSelectedTeachers(state);
    let chosenTeacher = getChosenTeacher(state);
    if(!chosenTeacher) chosenTeacher = {Name: "Select Teacher"};
    return { areTeachersFetched, selectedTeachers, chosenTeacher };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            fetchTeachersAction,
            chooseTeacherAction,
            UnsetCalendarToUserAction,
            UnsetTeacherSettingsAction
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTeacher);