import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Schedule from './Schedule';
import { SetCalendarToUserAction } from "../../redux/actions/calendarActions";
import { getChosenTeacher } from "../../redux/selectors/teachersSelectors";
import { getUserInfo } from '../../redux/selectors/userSelectors';

const mapStateToProps =  (state, ownProps) => {
    const userInfo = getUserInfo(state);
    const chosenTeacher = getChosenTeacher(state);
    return { ...ownProps, chosenTeacher, userInfo };
};

const mapDispatchToProps =  (dispatch, ownProps) => {
    return bindActionCreators({ SetCalendarToUserAction, }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);