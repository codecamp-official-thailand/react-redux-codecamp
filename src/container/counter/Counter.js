import React from "react";
import { connect } from "react-redux";
import CounterDisplay from "../../components/CounterDisplay/CounterDisplay";
import CounterPanel from "../../components/CounterPanel/CounterPanel";
import * as actionCreators from "../../store/actions/index";

function Counter(props) {
  return (
    <div>
      <CounterDisplay counter={props.ctr} />
      <CounterPanel label="Increase" changed={props.onIncreaseCounter} />
      <CounterPanel label="Decrease" changed={props.onDecreaseCounter} />
      <CounterPanel label="Add 10" changed={props.onAddCounter} />
      <CounterPanel label="Subtract 10" changed={props.onSubtractCounter} />
      <hr />
      <button onClick={() => props.onStoreResult(props.ctr)}>
        Store Result
      </button>
      <ul>
        {props.results.map((result) => (
          <li key={result.id} onClick={() => props.onDeleteResult(result.id)}>
            {result.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    results: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseCounter: () => dispatch(actionCreators.incrementCounter()),
    onDecreaseCounter: () => dispatch(actionCreators.decrementCounter()),
    onAddCounter: () => dispatch(actionCreators.addCounter(10)),
    onSubtractCounter: () => dispatch(actionCreators.subCounter(10)),
    onStoreResult: (value) => dispatch(actionCreators.storeResult(value)),
    onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
