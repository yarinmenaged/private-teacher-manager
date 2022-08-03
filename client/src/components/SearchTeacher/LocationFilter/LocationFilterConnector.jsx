import LocationFilter from './LocationFilter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {  };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {

        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationFilter);