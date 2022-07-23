import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getWeek } from "../../../redux/selectors/weekSelectors";
import CalendarContainer from "./CalendarContainer";

const mapStateToProps = (state, ownProps) => {
    const week = getWeek(state);
    return {...ownProps, week};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);