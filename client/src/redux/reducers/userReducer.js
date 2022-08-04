import ACTIONS from "../actions/actionConstants";

const initState = {
  // user info. should get it from server at the login!
  loginStatus: false,
  incorrectPassword: false,
  id: undefined,
  Name: "",
  Email: "",
  Location: "",
  Phone: "",
  Type: "",
  About: "",
  price: 0,
  subjects: [],
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.EDIT_ABOUT:
      return { ...state, About: payload };

    case ACTIONS.EDIT_PRICE:
      return { ...state, price: payload };

    case ACTIONS.GET_USER:
      if (payload.status) {
        return { ...state, incorrectPassword: true };
      } else {
        return {
          loginStatus: true,
          incorrectPassword: false,
          id: payload.id,
          Name: payload.Name,
          Email: payload.Email,
          Location: payload.Location,
          Phone: payload.Phone,
          Type: payload.Type,
          About: payload.About,
          price: payload.price,
          subjects: payload.subjects,
        };
      }

    case ACTIONS.GET_USER_BY_TOKEN:
      if (!payload) {
        return {
          ...state,
          loginStatus: false,
        };
      }
      return {
        loginStatus: true,
        incorrectPassword: false,
        id: payload.id,
        Name: payload.Name,
        Email: payload.Email,
        Location: payload.Location,
        Phone: payload.Phone,
        Type: payload.Type,
        About: payload.About,
        price: payload.price,
        subjects: payload.subject,
      };
    case ACTIONS.ADD_SUBJECT:
      const subjects = state.subjects;
      subjects.push(payload);
      return { ...state, subjects: subjects };

    case ACTIONS.REMOVE_SUBJECT:
      const Subjects = state.subjects;
      return {
        ...state,
        subjects: Subjects.filter((value) => value.id !== payload.id),
      };
    case ACTIONS.LOG_OUT:
      return initState;

    default:
      return state;
  }
};

export default reducer;
