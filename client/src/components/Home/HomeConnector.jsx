import Home from "./Home";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getUserName } from "../../redux/selectors/userSelector";
import { getAllSubjectsAction } from '../../redux/actions/subjectsAction';

const mapStateToProps = (state) => {
	const Name = getUserName(state);
	return { Name };
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			getAllSubjectsAction
		},
		dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
