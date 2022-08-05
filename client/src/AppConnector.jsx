import App from "./App";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getLoginStatus } from "./redux/selectors/userSelector";
import { getUserInfoByTokenAction } from "./redux/actions/userActions";
import { getSuccessful, getFailed, getMessage } from './redux/selectors/viewSelectors';
import { InitErrorSuccessAction } from './redux/actions/viewActions';

const mapStateToProps = (state) => {
	const loginStatus = getLoginStatus(state);
	const successful = getSuccessful(state);
	const failed = getFailed(state);
	const message = getMessage(state);
	return { loginStatus, successful, failed, message };
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getUserInfoByTokenAction, InitErrorSuccessAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
