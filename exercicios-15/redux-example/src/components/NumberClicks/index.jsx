import { connect } from "react-redux";

const NumberClicks = ({ counter }) => <div>{counter}</div>;

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});

export default connect(mapStateToProps)(NumberClicks);
