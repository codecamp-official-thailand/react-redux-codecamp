import React, { useState } from "react";
import { connect } from "react-redux";
import CounterDisplay from "../../components/CounterDisplay/CounterDisplay";
import CounterPanel from "../../components/CounterPanel/CounterPanel";

function Counter(props) {
  const [counter, setCounter] = useState(0)

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
      <CounterPanel label="Increase" changed={props.IncrementCtr} />
      <CounterPanel label="Decrease" changed={() => handleCounterChange("decrease")} />
      <CounterPanel label="Add 5" changed={() => handleCounterChange("add", 5)} />
      <CounterPanel label="Subtract 5" changed={() => handleCounterChange("subtract", 5)} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    IncrementCtr: () => dispatch({type:"INC_COUNTER"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);  
