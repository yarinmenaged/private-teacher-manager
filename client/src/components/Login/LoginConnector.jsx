import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from './Login'

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        
      },
      dispatch
    );
  }
  
  export default connect(undefined, mapDispatchToProps)(Login);