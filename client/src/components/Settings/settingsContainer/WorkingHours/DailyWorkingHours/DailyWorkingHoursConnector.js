import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setDailyWorkingHoursAction } from '../../../../../redux/actions/settingsActions';
import { DailyWorkingHours } from "./DailyWorkingHours";
const mapStateToProps = (state, ownProps) => {
    return { ...ownProps };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setDailyWorkingHoursAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyWorkingHours);
