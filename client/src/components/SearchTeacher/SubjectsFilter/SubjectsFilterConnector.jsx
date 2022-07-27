import SubjectsFilter from './SubjectsFilter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectSubjectAction, deselectSubjectAction } from "../../../redux/actions/subjectsAction";
import { getSelectedSubjects } from '../../../redux/selectors/subjectsSelector'

const mapStateToProps = state => {
    const selectedSubjects = getSelectedSubjects(state);
    return { selectedSubjects };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            selectSubjectAction, deselectSubjectAction
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsFilter);