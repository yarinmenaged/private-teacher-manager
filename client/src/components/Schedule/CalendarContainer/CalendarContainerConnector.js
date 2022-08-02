import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getWeek } from "../../../redux/selectors/weekSelectors";
import CalendarContainer from "./CalendarContainer";
import { GetEventsAction } from '../../../redux/actions/eventActions';
import { getUserInfo } from "../../../redux/selectors/userSelector";
import { getShowCalenderOfOtherUser, getUserId } from "../../../redux/selectors/calendarSelector";
import { getSettings } from '../../../redux/selectors/settingsSelector';

const mapStateToProps = (state, ownProps) => {
  const week = getWeek(state);
  const user_id = getShowCalenderOfOtherUser(state)
    ? getUserId(state)
    : getUserInfo(state).id;
  const teacher_preferences = getSettings(state).workingHours;
  return { ...ownProps, week, user_id, teacher_preferences };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ GetEventsAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
