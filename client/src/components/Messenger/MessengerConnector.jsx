import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Messenger from './Messenger';

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);