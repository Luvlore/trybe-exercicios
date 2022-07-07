import { connect } from "react-redux";
import { addClick } from "../../store/actions";

const ButtonClicks = ({ add }) => (
  <div>
    <button onClick={ add }>Adicionar</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addClick()),
});

export default connect(null, mapDispatchToProps)(ButtonClicks);
