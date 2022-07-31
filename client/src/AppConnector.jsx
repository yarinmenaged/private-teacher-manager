import App from "./App";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getLoginStatus } from "./redux/selectors/userSelectors";
import { getUserInfoByTokenAction } from "./redux/actions/userActions";

const mapStateToProps = (state) => {
	const loginStatus = getLoginStatus(state);
	return { loginStatus };
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getUserInfoByTokenAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
