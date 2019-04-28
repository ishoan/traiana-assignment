import {
    SET_SALAD_TOTAL_PRICE,
    SET_ORDER_DETAILS
} from '../constants/ActionTypes';


const INITIAL_STATE = {
  saladTotalPrice: 0,
  orderDetails: {}
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case SET_SALAD_TOTAL_PRICE:
      return {...state, saladTotalPrice: action.payload};
    case SET_ORDER_DETAILS:
      return {...state, orderDetails: action.payload};
    default:
      return state;
  }
};