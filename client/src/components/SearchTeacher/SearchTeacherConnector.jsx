import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllTeachers } from '../../redux/selectors/teachersSelectors'
import SearchTeacher from './SearchTeacher';
import { fetchTeachersAction, chooseTeacherAction } from '../../redux/actions/teachersActions';

const mapStateToProps = state => {
    const allTeachers = getAllTeachers(state);
    return { allTeachers } ;
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