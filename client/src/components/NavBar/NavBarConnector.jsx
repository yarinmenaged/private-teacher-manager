import NavBar from './NavBar'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logOutAction } from "../../redux/actions/userActions";
import { UnsetCalendarToUserAction } from '../../redux/actions/calendarActions';
import { getUserType, getLoginStatus } from "../../redux/selectors/userSelector";
import { chooseTeacherAction } from '../../redux/actions/teachersActions';
import { UnsetTeacherSettingsAction } from '../../redux/actions/settingsActions';

const mapStateToProps = state => {
    const Type = getUserType(state);
    const loginStatus = getLoginStatus(state);
    return { Type, loginStatus };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ logOutAction, UnsetCalendarToUserAction, chooseTeacherAction, UnsetTeacherSettingsAction }, dispatch);
}

  export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
