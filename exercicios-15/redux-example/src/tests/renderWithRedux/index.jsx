import { createStore } from "redux";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import rootReducer from "../../store/reducers";

export default function renderWithRedux(component, { initialState, store = createStore(rootReducer, initialState) } = {}) {
  return {
    ...render(<Provider store={ store }>{component}</Provider>),
    store,
  };
}
