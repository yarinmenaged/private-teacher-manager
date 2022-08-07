import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import WeeklyIncome from "./WeeklyIncome";
import { getEvents } from "../../../redux/selectors/eventSelector";
import { getUserInfo } from "../../../redux/selectors/userSelector";

const mapStateToProps = (state) => {
  const events = getEvents(state).filter(element => element.StudentId);
  const userInfo = getUserInfo(state);
  const price = userInfo.price;
  return { events, price };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyIncome);
