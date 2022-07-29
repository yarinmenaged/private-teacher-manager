import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import WeekSelector from "./WeekSelector";
import {
  IncrementWeekAction,
  DecrementWeekAction,
} from "../../../../redux/actions/weekActions";
import { getWeek } from "../../../../redux/selectors/weekSelectors";

const mapStateToProps = (state, ownProps) => {
  const week = getWeek(state);
  return { ...ownProps, week };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    { IncrementWeekAction, DecrementWeekAction },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekSelector);
