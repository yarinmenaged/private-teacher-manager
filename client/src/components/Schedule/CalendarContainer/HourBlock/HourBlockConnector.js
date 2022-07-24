import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HourBlock from './HourBlock';
import { getEvents } from '../../../../redux/selectors/eventSelector';

const mapStateToProps = (state, ownProps) => {
    const events = getEvents(state);
    return { ...ownProps, events };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({  ...ownProps }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HourBlock);