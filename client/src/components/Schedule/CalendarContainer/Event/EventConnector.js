import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Event from "./Event";
import { getShowCalenderOfOtherUser } from "../../../../redux/selectors/calendarSelector";
import { DeleteEventAction } from "../../../../redux/actions/eventActions";
import { getUserInfo } from "../../../../redux/selectors/userSelector";
import { getEvents } from "../../../../redux/selectors/eventSelector";

const mapStateToProps = (state, ownProps) => {
    const my_user_id = getUserInfo(state).id;
    const show_calendar_other_user = getShowCalenderOfOtherUser(state);
    const events = getEvents(state);
    return { ...ownProps, my_user_id, show_calendar_other_user, events };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ DeleteEventAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Event);