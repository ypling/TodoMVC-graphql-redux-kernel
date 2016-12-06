import * as actionTypes from "../constants/actionTypes";
import Immutable from "immutable";
export default function (state = Immutable.Map({}), action) {
  let newState;
  switch (action.type) {
    case actionTypes.GET_TODOS:
      newState = state;
      action.todos.forEach(todo => {
        newState = newState.set(todo.id, Immutable.fromJS(todo));
      });
      return newState;
    case actionTypes.ADD_TODO:
      return state.set(action.id, Immutable.fromJS(action.todo));
      break;
    case actionTypes.COMPLETE_TODO:
      return state.delete(action.id);
      break;
    default:
      return state;
      break;
  }
}