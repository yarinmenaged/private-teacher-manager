import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SingleProfile from './SingleProfile';
import { getChosenTeacher } from '../../../redux/selectors/teachersSelector';
import { SetCalendarToUserAction } from '../../../redux/actions/calendarActions';
import { resetSubjectsAction, selectSubjectAction } from '../../../redux/actions/subjectsAction';
import { getSubjects } from '../../../redux/selectors/subjectsSelector' 

const mapStateToProps = state => {
    //const chosenTeacher = getChosenTeacher(state);
    const subjects = getSubjects(state);
        const subjectsOptions = subjects.map(subject => ({
            value: subject.Name,
            label: subject.Name,
            id: subject.id,
        }));
    
    return { subjectsOptions };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            SetCalendarToUserAction, selectSubjectAction, resetSubjectsAction
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProfile);