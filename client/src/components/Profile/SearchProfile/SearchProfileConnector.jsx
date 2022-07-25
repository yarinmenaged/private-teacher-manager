import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchProfile from './SearchProfile';
import { getChoosenTeacher } from '../../../redux/selectors/teachersSelectors'

const mapStateToProps = state => {
    const chosenTeacher = getChoosenTeacher(state);
    return { chosenTeacher } ;
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchProfile);