import LocationFilter from './LocationFilter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { chooseLocationAction } from '../../../redux/actions/locationAction';
import { getChosenLocation } from '../../../redux/selectors/locationSelector'

const mapStateToProps = state => {
    const chosenLocation = getChosenLocation(state);
    return { chosenLocation: {value: chosenLocation, label: chosenLocation} };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            chooseLocationAction,
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationFilter);