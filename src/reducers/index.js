import {combineReducers} from 'redux';
import ingredientsReducer from './IngredientsReducer';
import CheckoutReducer from './CheckoutReducer';

export default combineReducers({
  ingredients: ingredientsReducer,
  checkout: CheckoutReducer
});
