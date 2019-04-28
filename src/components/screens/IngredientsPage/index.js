import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import {getProductList, addOrRemoveIngredients} from '../../../actions/IngredientsActions';
import {goToPage} from '../../../services/navigationService';
import Spinner from '../../common/Spinner';
import IngredientItem from './IngredientItem';
import {ingredients} from '../../../constants/Strings';
import './Style.css';

class IngredientsPage extends React.Component {

  constructor(props) {
    super(props);
    // get ingredients from server
    props.getProductList();
  }

  // render ingredients list
  renderIngredients() {
    const {ingredientsList, addOrRemoveIngredients} = this.props;

    return ingredientsList.map(item =>
        <IngredientItem
            key={item.id}
            ingredient={item}
            onClick={(item, act) => addOrRemoveIngredients(item, act, ingredientsList)}
        />);
  }

  // clear selected data
  clearSelectedIngredient() {
    const {getProductList} = this.props;

    localStorage.clear();
    getProductList();
  }

  renderPage() {
    return (
        <div className="container">
          <div className="ingredientsPage-title">
            {ingredients.pleaseSelect}
          </div>
          <div className="ingredientsPage-list-container">
            <div className="ingredientsPage-list-content">
              {this.renderIngredients()}
            </div>
            <div className="bottom-section">
              <Button
                  className="button"
                  variant="contained"
                  color="primary"
                  onClick={() => this.clearSelectedIngredient()}
              >
                {ingredients.clearSelectedIngredients}
              </Button>
              <Button
                  className="button"
                  variant="contained"
                  color="primary"
                  onClick={() => goToPage('CheckoutPage')}
              >
                {ingredients.proceedToCheckout}
              </Button>
            </div>
          </div>
        </div>
    );
  }

  render() {
    const {ingredientsList} = this.props;

    return (ingredientsList && ingredientsList.length > 0 ?
            <div>{this.renderPage()}</div> : <Spinner />
    )
  }
}

const _mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getProductList,
    addOrRemoveIngredients
  }, dispatch);
};

const _mapStateToProps = state => {
  const {
      ingredients: {ingredientsList}
  } = state;

  return {ingredientsList};
};

export default connect(_mapStateToProps, _mapDispatchToProps)(IngredientsPage);
