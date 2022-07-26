import SubjectsFilter from './SubjectsFilter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectSubjectAction, deselectSubjectAction } from "../../../redux/actions/subjectsAction";

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            selectSubjectAction, deselectSubjectAction
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsFilter);