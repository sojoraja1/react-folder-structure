import * as countAction from "./countActionTypes";

/*
 * Generates action for countReducers for increment
 *@returns {type:"string"} action - the action for countReducers
 */
const increment = () => {
  return {
    type: countAction.INCREMENT,
  };
};

/*
 * Generates action for countReducers for decrement
 *@returns {type:"string"} action - the action for countReducers
 */
const decrement = () => {
  return {
    type: countAction.DEC,
  };
};

export { increment, decrement };
