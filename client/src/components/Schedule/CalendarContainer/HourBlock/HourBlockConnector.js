import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HourBlock from './HourBlock';
import { getEvents } from '../../../../redux/selectors/eventSelector';
import { getUserInfo } from '../../../../redux/selectors/userSelectors';

const mapStateToProps = (state, ownProps) => {
    const events = getEvents(state);
    const user_type = getUserInfo(state).Type;
    return { ...ownProps, events, user_type };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({  ...ownProps }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HourBlock);