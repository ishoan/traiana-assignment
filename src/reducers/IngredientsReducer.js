import {
    SET_INGREDIENTS_LIST
} from '../constants/ActionTypes';


const INITIAL_STATE = {
  ingredientsList: [],
  disableCheckoutButton: true
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case SET_INGREDIENTS_LIST:
      return {...state, ingredientsList: [...action.payload]};
    default:
      return state;
  }
};
