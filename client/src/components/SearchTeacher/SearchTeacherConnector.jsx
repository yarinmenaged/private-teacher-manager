import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllTeachers, getChoosenTeacherIndex } from '../../redux/selectors/teachersSelectors'
import SearchTeacher from './SearchTeacher';
import { fetchTeachersAction, chooseTeacherAction } from '../../redux/actions/teachersActions';

const mapStateToProps = state => {
    const allTeachers = getAllTeachers(state);
    const choosenTeacherIndex = getChoosenTeacherIndex(state);
    return { allTeachers, choosenTeacherIndex } ;
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            fetchTeachersAction, chooseTeacherAction
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTeacher);