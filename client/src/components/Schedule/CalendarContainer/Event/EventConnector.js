import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Event from "./Event";
import { getUserInfo } from "../../../../redux/selectors/userSelectors";

const mapStateToProps = (state, ownProps) => {
    const my_user_id = getUserInfo(state).id;
    return {...ownProps, my_user_id};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Event);