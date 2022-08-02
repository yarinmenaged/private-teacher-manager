import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getWeek } from "../../../redux/selectors/weekSelectors";
import CalendarContainer from "./CalendarContainer";
import { GetEventsAction } from '../../../redux/actions/eventActions';
import { getUserInfo } from "../../../redux/selectors/userSelector";
import { getShowCalenderOfOtherUser, getUserId } from "../../../redux/selectors/calendarSelector";

const mapStateToProps = (state, ownProps) => {
  const week = getWeek(state);
  const user_id = getShowCalenderOfOtherUser(state)
    ? getUserId(state)
    : getUserInfo(state).id;
  return { ...ownProps, week, user_id };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ GetEventsAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
