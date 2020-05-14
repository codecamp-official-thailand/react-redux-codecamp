export const INC_COUNTER = "INC_COUNTER";
export const DEC_COUNTER = "DEC_COUNTER";
export const ADD_COUNTER = "ADD_COUNTER";
export const SUB_COUNTER = "SUB_COUNTER";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const incrementCounter = () => {
  return {
    type: INC_COUNTER,
  };
};

export const decrementCounter = () => {
  return {
    type: DEC_COUNTER,
  };
};

export const addCounter = (val) => {
  return {
    type: ADD_COUNTER,
    value: val,
  };
};

export const subCounter = (val) => {
  return {
    type: SUB_COUNTER,
    value: val,
  };
};

const saveResult = (ctr) => {
  return {
    type: STORE_RESULT,
    counter: ctr,
  };
};

export const storeResult = (ctr) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(ctr));
    }, 2000);
  };
};

export const deleteResult = (id) => {
  return {
    type: DELETE_RESULT,
    targetId: id,
  };
};
