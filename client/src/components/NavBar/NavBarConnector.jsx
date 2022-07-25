import NavBar from './NavBar'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logOutAction } from "../../redux/actions/userActions";
import { getUserType } from "../../redux/selectors/userSelectors"

const mapStateToProps = state => {
    const Type = getUserType(state);
    return { Type };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            logOutAction
        },
        dispatch
    );
}

  export default connect(mapStateToProps, mapDispatchToProps)(NavBar);