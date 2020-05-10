import React, { useState } from "react";
import CounterDisplay from "../../components/CounterDisplay/CounterDisplay";
import CounterPanel from "../../components/CounterPanel/CounterPanel";

function Counter() {
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
      <CounterDisplay counter={counter} />
      <CounterPanel label="Increase" changed={() => handleCounterChange("increase")} />
      <CounterPanel label="Decrease" changed={() => handleCounterChange("decrease")} />
      <CounterPanel label="Add 5" changed={() => handleCounterChange("add", 5)} />
      <CounterPanel label="Subtract 5" changed={() => handleCounterChange("subtract", 5)} />
    </div>
  );
}

export default Counter;
