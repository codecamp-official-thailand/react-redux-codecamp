import React, { useState } from "react";
import { connect } from "react-redux";
import CounterDisplay from "../../components/CounterDisplay/CounterDisplay";
import CounterPanel from "../../components/CounterPanel/CounterPanel";
import * as actionTypes from "../../store/action";

function Counter(props) {
  const [counter, setCounter] = useState(0);

  const handleCounterChange = (action, value) => {
    switch (action) {
      case "increase":
        setCounter((counter) => counter + 1);
        break;
      case "decrease":
        setCounter((counter) => counter - 1);
        break;
      case "add":
        setCounter((counter) => counter + value);
        break;
      case "subtract":
        setCounter((counter) => counter - value);
        break;
    }
  };

  return (
    <div>
      <CounterDisplay counter={props.ctr} />
      <CounterPanel label="Increase" changed={props.incrementCtr} />
      <CounterPanel label="Decrease" changed={props.decrementCtr} />
      <CounterPanel label="Add 10" changed={props.addCtr} />
      <CounterPanel label="Subtract 10" changed={props.subtractCtr} />
      <hr />
      <button onClick={() => props.storeResult(props.ctr)}>
        Store Results
      </button>
      <ul>
        {props.results.map((result) => (
          <li onClick={() => props.deleteResult(result.id)}>{result.ctr}</li>
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
    incrementCtr: () => dispatch({ type: actionTypes.INC_COUNTER }),
    decrementCtr: () => dispatch({ type: actionTypes.DEC_COUNTER }),
    addCtr: () => dispatch({ type: actionTypes.ADD, value: 10 }),
    subtractCtr: () => dispatch({ type: actionTypes.SUBTRACT, value: 10 }),
    storeResult: (ctr) =>
      dispatch({ type: actionTypes.STORE_RESULT, counter: ctr }),
    deleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, id: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
