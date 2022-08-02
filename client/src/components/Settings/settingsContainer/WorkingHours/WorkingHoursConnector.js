import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import WorkingHours from "./WorkingHours";
import { setSettingsForTeacherAction } from '../../../../redux/actions/settingsActions';
import { getSettingsState } from '../../../../redux/selectors/settingsSelector';

const mapStateToProps = (state, ownProps) => {
  const settings = getSettingsState(state);
  return { ...ownProps, settings };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setSettingsForTeacherAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkingHours);
