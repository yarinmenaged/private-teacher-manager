import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Event from "./Event";
import { getUserId } from "../../../../redux/selectors/calendarSelector";
import { DeleteEventAction } from "../../../../redux/actions/eventActions";
import { getUserInfo } from "../../../../redux/selectors/userSelector";

const mapStateToProps = (state, ownProps) => {
    const my_user_id = getUserInfo(state).id;
    const calender_user_id = getUserId(state);
    return { ...ownProps, my_user_id, calender_user_id };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ DeleteEventAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Event);