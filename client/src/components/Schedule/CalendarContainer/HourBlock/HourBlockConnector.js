import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HourBlock from './HourBlock';
import { getEvents } from '../../../../redux/selectors/eventSelector';
import { getUserInfo } from '../../../../redux/selectors/userSelector';
import { AddEventAction } from '../../../../redux/actions/eventActions';
import { getUserId } from '../../../../redux/selectors/calendarSelector';
import { getSelectedSubjectId, getSelectedSubjects } from '../../../../redux/selectors/subjectsSelector';

const mapStateToProps = (state, ownProps) => {
    const events = getEvents(state);
    const user_type = getUserInfo(state).Type;
    const user_id = getUserInfo(state).id;
    const calender_user_id = getUserId(state) === "" ? null : getUserId(state);
    const subject_id = getSelectedSubjects(state).length ? getSelectedSubjectId(state) : null;
    return { ...ownProps, events, user_type, user_id, calender_user_id, subject_id };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({  ...ownProps, AddEventAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HourBlock);