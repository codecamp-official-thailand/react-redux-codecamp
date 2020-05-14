const { createStore } = require("redux");

const initialState = {
  counter: 0,
};

// Reducer - 1 Reducer เท่านั้น
const reducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "ADD_COUNTER") {
    return {
      counter: state.counter + action.value,
    };
  }

  return state;
};

// Store - 1 Store เท่านั้น
const store = createStore(reducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log("[Subscription Fn]");
});

// Dispatching Acions
store.dispatch({ type: "INC_COUNTER" });
console.log(store.getState());
store.dispatch({ type: "ADD_COUNTER", value: 5 });
console.log(store.getState());
