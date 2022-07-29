import ACTIONS from "../actions/actionConstants";
import moment from "moment";

const initState = {
  week: moment().week(),
};

const reducer = (state = initState, action) => {
  const { type } = action;

  switch (type) {
    case ACTIONS.ADD_WEEK:
      return { week: state.week + 1 };
    case ACTIONS.DECREMENT_WEEK:
      return { week: state.week - 1 };
    default:
      return state;
  }
};

export default reducer;
