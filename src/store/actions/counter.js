import * as actionTypes from "./actionTypes";

export const incrementCounter = () => {
  return {
    type: actionTypes.INC_COUNTER,
  };
};

export const decrementCounter = () => {
  return {
    type: actionTypes.DEC_COUNTER,
  };
};

export const addCounter = (val) => {
  return {
    type: actionTypes.ADD_COUNTER,
    value: val,
  };
};

export const subCounter = (val) => {
  return {
    type: actionTypes.SUB_COUNTER,
    value: val,
  };
};
