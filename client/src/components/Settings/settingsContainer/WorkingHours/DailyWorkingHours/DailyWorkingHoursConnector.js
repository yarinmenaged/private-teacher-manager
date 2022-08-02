import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setDailyWorkingHoursAction } from '../../../../../redux/actions/settingsActions';
import { DailyWorkingHours } from "./DailyWorkingHours";
import { getSettingsState } from "../../../../../redux/selectors/settingsSelector";
const mapStateToProps = (state, ownProps) => {
  const working_hours = getSettingsState(state).workingHours;
    return { ...ownProps, working_hours };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setDailyWorkingHoursAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyWorkingHours);
