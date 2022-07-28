import SubjectsFilter from './SubjectsFilter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    selectSubjectAction,
    deselectSubjectAction,
    onlyOneOptionAction
} from "../../../redux/actions/subjectsAction";
import { getSelectedSubjects } from '../../../redux/selectors/subjectsSelector';
import { unchooseTeacherAction } from '../../../redux/actions/teachersActions'

const mapStateToProps = state => {
    const selectedSubjects = getSelectedSubjects(state);
    console.log(selectedSubjects);
    return { selectedSubjects };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            selectSubjectAction, deselectSubjectAction,
            unchooseTeacherAction, onlyOneOptionAction
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsFilter);