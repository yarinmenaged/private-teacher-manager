import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Schedule from './Schedule';
import { SetCalendarToUserAction, UnsetCalendarToUserAction } from "../../redux/actions/calendarActions";
import { getChosenTeacher } from "../../redux/selectors/teachersSelector";
import { getUserInfo } from '../../redux/selectors/userSelector';
import { GetSelectedTeacherSettingsAction } from '../../redux/actions/settingsActions';

const mapStateToProps = (state, ownProps) => {
  const userInfo = getUserInfo(state);
  const chosenTeacher = getChosenTeacher(state);
  return { ...ownProps, chosenTeacher, userInfo };
};

const mapDispatchToProps =  (dispatch, ownProps) => {
    return bindActionCreators({ SetCalendarToUserAction, UnsetCalendarToUserAction, GetSelectedTeacherSettingsAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
