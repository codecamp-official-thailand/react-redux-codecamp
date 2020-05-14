import * as actionTypes from "../actions/actionTypes";

const initialState = {
  results: [],
};

const updateState = (state, newValue) => {
  return {
    ...state,
    ...newValue,
  };
};

const storeResult = (state, action) => {
  const newCounter = {
    id: new Date(),
    value: action.counter,
  };
  const newResults = state.results.concat(newCounter);
  return updateState(state, newResults);
};

const deleteResult = (state, action) => {
  const newResults = state.results.filter(
    (result) => result.id !== action.targetId
  );
  return updateState(state, newResults);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return storeResult(state, action);
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
};

export default reducer;
