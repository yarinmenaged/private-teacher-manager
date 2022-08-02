import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SearchProfile from "./SearchProfile";
import { getChosenTeacher } from "../../../redux/selectors/teachersSelectors";
import { SetCalendarToUserAction } from "../../../redux/actions/calendarActions";
import { selectSubjectAction } from "../../../redux/actions/subjectsAction";

const mapStateToProps = (state) => {
	const chosenTeacher = getChosenTeacher(state);
	let subjectsOptions = [];
	if (chosenTeacher) {
		subjectsOptions = chosenTeacher.subjects.map((subject) => ({
			value: subject.Name,
			label: subject.Name,
			id: subject.id,
		}));
	}
	return { chosenTeacher, subjectsOptions };
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			SetCalendarToUserAction,
			selectSubjectAction,
		},
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchProfile);
