import Home from "./Home";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getUserInfo, getUserName } from "../../redux/selectors/userSelector";
import { getAllSubjectsAction } from '../../redux/actions/subjectsAction';
import { GetSettingsAction } from '../../redux/actions/settingsActions';

const mapStateToProps = (state) => {
	const Name = getUserName(state);
	const user_type = getUserInfo(state).Type;
	return { Name, user_type };
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			getAllSubjectsAction,
			GetSettingsAction
		},
		dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
