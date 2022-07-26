import NavBar from './NavBar'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logOutAction } from "../../redux/actions/userActions";
import { UnsetCalendarToUserAction } from '../../redux/actions/calendarActions'

const mapStateToProps = state => {
    return {
         
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ logOutAction, UnsetCalendarToUserAction }, dispatch);
}

  export default connect(mapStateToProps, mapDispatchToProps)(NavBar);