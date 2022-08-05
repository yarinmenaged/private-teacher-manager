import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UpdateDescriptionAction } from '../../../../../redux/actions/eventActions';
import EditDescriptionContainer from './EditDescriptionContainer';

const mapStateToProps = (state, ownProps) => {
    return { ...ownProps};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ UpdateDescriptionAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditDescriptionContainer);