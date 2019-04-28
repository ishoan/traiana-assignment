import {serverConnectGet} from '../services/ServerConnection';
import {
    SET_INGREDIENTS_LIST,
    SET_SELECTED_LIST
} from '../constants/ActionTypes';

export const getProductList = () => async dispatch => {

  try {
    let list = [];

    if (JSON.parse(localStorage.getItem('ingredientList')) === null) {
      const response = await serverConnectGet('./salad.json');
      list = [...response.data.items];

      list.forEach(item => {
        item.amount = 0;
        item.totalPrice = 0;
        item.id = item.name;
      });

      localStorage.setItem("ingredientList", JSON.stringify(list));
    } else {
      list = JSON.parse(localStorage.getItem('ingredientList'))
    }

    //Keep data when refreshing
    setSelectedList(list, dispatch);

    dispatch({
      type: SET_INGREDIENTS_LIST,
      payload: list
    });
  } catch (err) {
    console.log(err)
  }
};

// Save only a list of the selected for the checkout page
const setSelectedList = (list, dispatch) => {
  let selectedList = list.filter(item => {
    return item.amount > 0;
  });
  localStorage.setItem("selectedIngredientList", JSON.stringify(selectedList));

  dispatch ({
    type: SET_SELECTED_LIST,
    payload: selectedList
  });
};

export const addOrRemoveIngredients = (act, ingredient, list)  => async dispatch => {

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

  setSelectedList(list, dispatch);

  localStorage.setItem("ingredientList", JSON.stringify(list));

  dispatch ({
    type: SET_INGREDIENTS_LIST,
    payload: list
  });
};