import Home from './Home';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);