import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllTeachers, getChoosenTeacher } from '../../redux/selectors/teachersSelectors'
import SearchTeacher from './SearchTeacher';
import { fetchTeachersAction } from '../../redux/actions/teachersActions';

const mapStateToProps = state => {
    const allTeachers = getAllTeachers(state);
    const chosenTeacher = getChoosenTeacher(state);
    return { allTeachers, chosenTeacher } ;
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            fetchTeachersAction
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTeacher);