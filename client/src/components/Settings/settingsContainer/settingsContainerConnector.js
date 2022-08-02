import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SettingsContainer from "./settingsContainer";
import { getUserType } from "../../../redux/selectors/userSelectors";

const mapStateToProps = (state) => {
  const type = getUserType(state);
  return { type };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
