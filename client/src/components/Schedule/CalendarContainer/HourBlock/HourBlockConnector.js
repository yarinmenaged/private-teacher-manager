import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HourBlock from './HourBlock';
import { getEvents } from '../../../../redux/selectors/eventSelector';
import { getUserInfo } from '../../../../redux/selectors/userSelector';
import { AddEventAction } from '../../../../redux/actions/eventActions';
import { getShowCalenderOfOtherUser, getUserId } from '../../../../redux/selectors/calendarSelector';
import { getSelectedSubjectId, getSelectedSubjects } from '../../../../redux/selectors/subjectsSelector';
import { getLessonLength } from '../../../../redux/selectors/settingsSelector';

const mapStateToProps = (state, ownProps) => {
    const events = getEvents(state);
    const user_type = getUserInfo(state).Type;
    const user_id = getUserInfo(state).id;
    const calender_user_id = getUserId(state) === "" ? null : getUserId(state);
    const subject_id = getSelectedSubjects(state).length ? getSelectedSubjectId(state) : null;
    const subject_name = getSelectedSubjects(state).length ? getSelectedSubjects(state)[0].Name : null;
    const show_other_user_calendar = getShowCalenderOfOtherUser(state);
    const lesson_length = getLessonLength(state);
    return { ...ownProps, events, user_type, user_id, calender_user_id, subject_id, show_other_user_calendar, subject_name, lesson_length };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ ...ownProps, AddEventAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HourBlock);
