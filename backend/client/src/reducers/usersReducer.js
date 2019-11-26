const INITIAL_STATE = {
  user: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN-UP":
      return {};
    default:
      break;
  }
};
