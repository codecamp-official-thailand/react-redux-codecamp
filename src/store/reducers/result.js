import * as actionTypes from "../action";

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.counter,
        }),
      };
    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter(
          (result) => result.id !== action.targetId
        ),
      };
  }

  return state;
};

export default reducer;
