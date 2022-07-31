import MultipleSubjectsOptions from './MultipleSubjectsOptions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectSubjectAction, deselectSubjectAction } from "../../../../redux/actions/subjectsAction";
import { getSelectedSubjects, getSubjects } from '../../../../redux/selectors/subjectsSelector';
import { unchooseTeacherAction } from '../../../../redux/actions/teachersActions'

const mapStateToProps = state => {
    const selectedSubjects = getSelectedSubjects(state);
    const subjectsList = getSubjects(state);
    return { selectedSubjects, subjectsList };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            selectSubjectAction, deselectSubjectAction, unchooseTeacherAction
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MultipleSubjectsOptions);