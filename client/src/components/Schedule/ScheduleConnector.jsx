import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Schedule from './Schedule';

const mapStateToProps =  (state, ownProps) => {
    return { ...ownProps };
};

const mapDispatchToProps =  (dispatch, ownProps) => {
    return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);