import { cleanup, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import App from "../App";
import renderWithRedux from "./renderWithRedux";

describe('testing clicks', () => {
  beforeEach(cleanup);
  it('the page has a button and a text 0', () => {
    renderWithRedux(<App />);

    const buttonAdd = screen.queryByRole('button', { name: "Adicionar" });
    const textEl = screen.getByText('0');

    expect(buttonAdd).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();
  });

  it('a click in a button should increment the value of clicks', () => {
    const INITIAL_STATE = {
      counter: {
        counter: 5,
      },
    };

    renderWithRedux(<App />, { initialState: INITIAL_STATE });

    const btnAdd = screen.queryByRole('button', { name: 'Adicionar' });
    expect(btnAdd).toBeInTheDocument();

    const getNumber = screen.getByText('5');
    expect(getNumber).toBeInTheDocument();
  })
});
