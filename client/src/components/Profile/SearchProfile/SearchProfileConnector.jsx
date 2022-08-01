import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchProfile from './SearchProfile';
import { getSelectedTeachers } from '../../../redux/selectors/teachersSelector';
import { SetCalendarToUserAction } from '../../../redux/actions/calendarActions';
import { resetSubjectsAction, selectSubjectAction } from '../../../redux/actions/subjectsAction';

const mapStateToProps = state => {
    const selectedTeachers = getSelectedTeachers(state);
    return { selectedTeachers };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchProfile);