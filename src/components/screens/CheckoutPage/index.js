import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getProductList} from '../../../actions/IngredientsActions';
import {setSaladTotalPrice, setOrderDetails} from '../../../actions/CheckoutActions';
import {goToPage} from '../../../services/navigationService';
import {checkoutString, dialogStrings, ingredients} from '../../../constants/Strings';
import DialogBox from '../../common/Dialog';
import OrderDescription from './OrderDescription';
import OrderDetailsForm from './OrderDetailsForm';
import OrderDetailsDialog from './OrderDetailsDialog';
import './Style.css';

class CheckoutPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dialogToggle: false
    };
  }

  // calculating the price of all the ingredients list
  totalSaladPriceCalc() {
    const {selectedList, setSaladTotalPrice} = this.props;
    setSaladTotalPrice(selectedList);
  }

  // close the modal, clearing the storage and going back to Store landing page
  onClickClose() {
    const {dialogToggle} = this.state;

    this.setState({dialogToggle: !dialogToggle});
    goToPage('/');
  }

  // submit form, save user details and open modal
  formOnSubmit(details) {
    const {dialogToggle} = this.state;
    const {setOrderDetails} = this.props;

    setOrderDetails(details);
    this.setState({dialogToggle: !dialogToggle})
  }

  componentDidMount() {
    const {selectedList, getProductList} = this.props;

    this.totalSaladPriceCalc();
    // Handling refreshing page
    if (selectedList.length === 0) {
      getProductList();
    }
  }

  componentDidUpdate(prevProps) {
    // after list was render it calculate the salad total price, handling refreshing page
    if (prevProps.saladTotalPrice === 0) {
      this.totalSaladPriceCalc();
    }
  }

  // delete storage when we go out from the page
  componentWillUnmount() {
    localStorage.clear();
  }

  render() {
    const {selectedList, saladTotalPrice, orderDetails} = this.props;
    const {dialogToggle} = this.state;

    return (
        <div className="checkout-container">
          <div className="checkout-title">
            {checkoutString.checkout}
          </div>
          <div className="content-container">
            <div className="section">
              <OrderDescription
                  Orders={selectedList}
                  totalPrice={`${ingredients.currency}${saladTotalPrice}`}
              />
            </div>
            <div className="section">
              <OrderDetailsForm
                  onSubmit={details => this.formOnSubmit(details)}
              />
            </div>
          </div>
          <DialogBox
              title={dialogStrings.thankYou}
              isOpen={dialogToggle}
              onClickClose={() => this.onClickClose()}
          >
            <OrderDetailsDialog
                orderDetails={orderDetails}
                saladTotalPrice={saladTotalPrice}
            />
          </DialogBox>
        </div>
    );
  }
}

const _mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getProductList,
    setSaladTotalPrice,
    setOrderDetails
  }, dispatch);
};

const _mapStateToProps = state => {
  const {
      ingredients: {selectedList},
      checkout: {saladTotalPrice, orderDetails}
  } = state;

  return {selectedList, saladTotalPrice, orderDetails};
};

export default connect(_mapStateToProps, _mapDispatchToProps)(CheckoutPage);
