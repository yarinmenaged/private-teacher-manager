import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Schedule from './Schedule';

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            
        },
        dispatch
    );
}

export default connect(undefined, mapDispatchToProps)(Schedule);