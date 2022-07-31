import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchProfile from './SearchProfile';
import { getChosenTeacher } from '../../../redux/selectors/teachersSelector';
import { SetCalendarToUserAction } from '../../../redux/actions/calendarActions';
import { getAllSubjectsAction } from '../../../redux/actions/subjectsAction';

const mapStateToProps = state => {
    const chosenTeacher = getChosenTeacher(state);
    return { chosenTeacher } ;
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            SetCalendarToUserAction, getAllSubjectsAction
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchProfile);