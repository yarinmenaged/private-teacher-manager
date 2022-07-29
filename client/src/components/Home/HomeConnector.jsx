import Home from './Home';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserInfo } from '../../redux/selectors/userSelectors';

const mapStateToProps = state => {
        const name = getUserInfo(state).Name;
        return { name } ;
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {

        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);