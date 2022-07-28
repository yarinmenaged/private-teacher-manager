import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Schedule from "./Schedule";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
