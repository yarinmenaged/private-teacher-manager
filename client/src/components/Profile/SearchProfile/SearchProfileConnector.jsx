import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchProfile from './SearchProfile';
import { getChosenTeacher } from '../../../redux/selectors/teachersSelectors';
import { SetCalendarToUserAction } from '../../../redux/actions/calendarActions';

const mapStateToProps = state => {
    const chosenTeacher = getChosenTeacher(state);
    return { chosenTeacher } ;
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            SetCalendarToUserAction,
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchProfile);