import * as actionTypes from "../actions/actionTypes";

const initialState = {
  counter: 0,
};

const updateState = (state, newValue) => {
  return {
    ...state,
    ...newValue,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INC_COUNTER:
      return updateState(state, { counter: state.counter + 1 });
    case actionTypes.DEC_COUNTER:
      return updateState(state, { counter: state.counter - 1 });
    case actionTypes.ADD_COUNTER:
      return updateState(state, { counter: state.counter + action.value });
    case actionTypes.SUB_COUNTER:
      return updateState(state, { counter: state.counter - action.value });
    default:
      return state;
  }
};

export default reducer;
