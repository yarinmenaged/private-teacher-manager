import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HourBlock from './HourBlock';
import { getEvents } from '../../../../redux/selectors/eventSelector';
import { getUserInfo } from '../../../../redux/selectors/userSelectors';
import { AddEventAction } from '../../../../redux/actions/eventActions';

const mapStateToProps = (state, ownProps) => {
    const events = getEvents(state);
    const user_type = getUserInfo(state).Type;
    const user_id = getUserInfo(state).id;
    return { ...ownProps, events, user_type, user_id };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({  ...ownProps, AddEventAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HourBlock);