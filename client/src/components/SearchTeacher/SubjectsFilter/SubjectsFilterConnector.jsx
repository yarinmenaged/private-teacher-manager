import SubjectsFilter from './SubjectsFilter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    selectSubjectAction,
    onlyOneOptionAction
} from "../../../redux/actions/subjectsAction";
import { getSubjects } from '../../../redux/selectors/subjectsSelector';

const mapStateToProps = state => {
    const subjectsList = getSubjects(state);
    return { subjectsList };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            selectSubjectAction, onlyOneOptionAction
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsFilter);