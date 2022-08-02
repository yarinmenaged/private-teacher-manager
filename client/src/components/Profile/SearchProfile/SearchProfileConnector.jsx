import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchProfile from './SearchProfile';
import { getSelectedTeachers } from '../../../redux/selectors/teachersSelector';
import { getChosenTeacher } from '../../../redux/selectors/teachersSelector'

const mapStateToProps = state => {
    const selectedTeachers = getSelectedTeachers(state);
    const chosenTeacher = getChosenTeacher(state)
    return { selectedTeachers, chosenTeacher };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {

        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchProfile);