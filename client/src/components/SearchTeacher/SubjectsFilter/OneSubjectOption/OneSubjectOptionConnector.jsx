import OneSubjectOption from './OneSubjectOption';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectSubjectAction, resetSubjectsAction } from "../../../../redux/actions/subjectsAction";
import { getSubjects, getSelectedSubjects } from '../../../../redux/selectors/subjectsSelector';

const mapStateToProps = state => {
    const subjectsList = getSubjects(state);
    const selctedSubjects = getSelectedSubjects(state);
    return { subjectsList, selctedSubjects };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            selectSubjectAction, resetSubjectsAction
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OneSubjectOption);