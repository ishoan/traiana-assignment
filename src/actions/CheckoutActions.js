import {
    SET_SALAD_TOTAL_PRICE,
    SET_ORDER_DETAILS
} from '../constants/ActionTypes';

export const setSaladTotalPrice = ingredientList => {

  const saladTotalPrice = ingredientList.reduce((acc, currentValue) => {
    return acc + Number(currentValue.totalPrice);
  }, 0);

  return ({
    type: SET_SALAD_TOTAL_PRICE,
    payload: saladTotalPrice.toFixed(1)
  });
};

export const setOrderDetails = details => {

  return ({
    type: SET_ORDER_DETAILS,
    payload: details
  });
};