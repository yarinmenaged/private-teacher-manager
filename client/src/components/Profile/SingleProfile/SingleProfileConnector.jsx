import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SingleProfile from './SingleProfile';
import { SetCalendarToUserAction } from '../../../redux/actions/calendarActions';
import { resetSubjectsAction, selectSubjectAction } from '../../../redux/actions/subjectsAction';
import { getSelectedSubjects } from '../../../redux/selectors/subjectsSelector' 
import { chooseTeacherAction } from '../../../redux/actions/teachersActions'

const mapStateToProps = state => {
    const selectedSubjects = getSelectedSubjects(state);
    return { selectedSubjects };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            SetCalendarToUserAction, selectSubjectAction, resetSubjectsAction, chooseTeacherAction
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProfile);