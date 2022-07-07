import { ADD_CLICK } from "../actions";

const INICIAL_STATE = {
  counter: 0,
};

export default function clickReducer(state = INICIAL_STATE, action) {
  switch (action.type) {
    case ADD_CLICK:
      return { counter: state.counter + 1};
    
    default:
      return state;
  }
}
