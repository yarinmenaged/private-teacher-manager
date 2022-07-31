import Home from "./Home";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getUserName } from "../../redux/selectors/userSelector";

const mapStateToProps = (state) => {
const name = getUserName(state);
	return { name };
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
