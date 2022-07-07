import { NEW_ACTION } from "../actions";

const INICIAL_STATE = {
  state: '',
};

export default function myReducer(state = INICIAL_STATE, action) {
  switch (action.type) {
    case NEW_ACTION:
      return {
        state: action.state,
      };

    default:
      return state;
  }
}
