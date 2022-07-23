import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import WeekSelector from "./WeekSelector";
import { AddWeekAction, DecrementWeekAction } from '../../../../redux/actions/weekActions';
import { getWeek } from '../../../../redux/selectors/weekSelectors';
import moment from 'moment';


const mapStateToProps = (state, ownProps) => {
    const week = getWeek(state);
    return {...ownProps, week };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ AddWeekAction, DecrementWeekAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekSelector);