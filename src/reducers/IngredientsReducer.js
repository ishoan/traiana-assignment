import {
    SET_INGREDIENTS_LIST,
    SET_SELECTED_LIST
} from '../constants/ActionTypes';


const INITIAL_STATE = {
  ingredientsList: [],
  selectedList: []
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case SET_INGREDIENTS_LIST:
      return {...state, ingredientsList: [...action.payload]};
    case SET_SELECTED_LIST:
      return {...state, selectedList: action.payload};
    default:
      return state;
  }
};
