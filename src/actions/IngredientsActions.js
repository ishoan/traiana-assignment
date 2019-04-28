import {serverConnectGet} from '../services/ServerConnection';
import {
    SET_INGREDIENTS_LIST
} from '../constants/ActionTypes';

let list = [];

export const getProductList = () => async dispatch => {

  try {
    const response = await serverConnectGet('./salad.json');
    list = [...response.data.items];

    list.forEach(item => {
      item.amount = 0;
      item.totalPrice = 0;
      item.id = item.name;
    });

    if (JSON.parse(localStorage.getItem('ingredientList')) !== null) {
      list = JSON.parse(localStorage.getItem('ingredientList'))
    }

    dispatch({
      type: SET_INGREDIENTS_LIST,
      payload: list
    });
  } catch (err) {
    console.log(err)
  }
};

export const addOrRemoveIngredients = (act, ingredient) => {

  switch (act) {
    case 'inc':
      ingredient.amount++;
      break;
    case 'dec':
      if (ingredient.amount !== 0) ingredient.amount--;
      break;
    default:
      break;
  }

  ingredient.totalPrice = (ingredient.amount * ingredient.price).toFixed(2);

  let productIndex = list.findIndex(item => item.id === ingredient.id);
  list[productIndex] = ingredient;

  localStorage.setItem("ingredientList", JSON.stringify(list));

  return ({
    type: SET_INGREDIENTS_LIST,
    payload: list
  });
};