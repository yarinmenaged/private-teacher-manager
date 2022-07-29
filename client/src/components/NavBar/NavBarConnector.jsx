import NavBar from './NavBar'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logOutAction } from "../../redux/actions/userActions";

const mapStateToProps = state => {
    return {
         
    };
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