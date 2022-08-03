import LocationFilter from './LocationFilter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { chooseLocationAction } from '../../../redux/actions/locationAction';
import { getChosenLocation } from '../../../redux/selectors/locationSelector';
import { unchooseTeacherAction } from '../../../redux/actions/teachersActions'

const mapStateToProps = state => {
    const chosenLocation = getChosenLocation(state);
    return { chosenLocation: {value: chosenLocation, label: chosenLocation} };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            chooseLocationAction, unchooseTeacherAction,
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationFilter);