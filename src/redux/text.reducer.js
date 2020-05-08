const INIT_STATE = {
  text: "Hello World!"
};

const textReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD":
      // console.log(action, state);
      return {
        ...state,
        text: action.payload
      };
    default:
      return state;
  }
};

export default textReducer;
