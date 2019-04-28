import React from "react";
import Fab from '@material-ui/core/Fab';
import {ingredients} from '../../../../constants/Strings';
import './Style.css';

const IngredientItem = ({ingredient, onClick}) => {

  return (
      <div className="ingredient-item">
        <div className="item-top">
          <div className="label">
            {ingredient.name}
          </div>
          <div className="label">
            {`${ingredients.price}: ${ingredients.currency}${ingredient.price}`}
          </div>
          <div className="label">
            {`${ingredients.totalPrice}: ${ingredients.currency}${ingredient.totalPrice}`}
          </div>
        </div>
        <div className="item-bottom">
          <Fab
              className="button"
              color="primary"
              aria-label="Add"
              size="medium"
              onClick={() => onClick('inc', ingredient)}
          >
            <div className="sign">{ingredients.add}</div>
          </Fab>
          <div className="amount">{ingredient.amount}</div>
          <Fab
              className="button"
              color="primary"
              aria-label="Remove"
              size="medium"
              onClick={() => onClick('dec', ingredient)}
          >
            <div className="sign">{ingredients.remove}</div>
          </Fab>
        </div>
      </div>
  )
};


export default IngredientItem;