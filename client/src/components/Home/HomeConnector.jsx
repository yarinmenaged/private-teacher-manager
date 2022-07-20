import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './Home';

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {

        },
        dispatch
    );
}

export default connect(undefined, mapDispatchToProps)(Home);