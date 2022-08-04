import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserInfo } from '../../../../redux/selectors/userSelector';
import { AddEventAction } from '../../../../redux/actions/eventActions';
import {  getUserId } from '../../../../redux/selectors/calendarSelector';
import { getSelectedSubjectId, getSelectedSubjects } from '../../../../redux/selectors/subjectsSelector';
import { getLessonLength } from '../../../../redux/selectors/settingsSelector';
import AddEventDialog from './AddEventDialog';

const mapStateToProps = (state, ownProps) => {
    const user_type = getUserInfo(state).Type;
    const user_id = getUserInfo(state).id;
    const calender_user_id = getUserId(state) === "" ? null : getUserId(state);
    const subject_id = getSelectedSubjects(state).length ? getSelectedSubjectId(state) : null;
    const subject_name = getSelectedSubjects(state).length ? getSelectedSubjects(state)[0].Name : null;
    const lesson_length = getLessonLength(state);
    return { ...ownProps, user_type, user_id, calender_user_id, subject_id, subject_name, lesson_length };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ ...ownProps, AddEventAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEventDialog);