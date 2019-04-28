import React from "react";
import {formStrings, ingredients} from '../../../../constants/Strings';
import './Style.css';

const OrderDetailsDialog = ({orderDetails, saladTotalPrice}) => {
  const additionalNote = orderDetails.additionalNotes.length > 0 ? orderDetails.additionalNotes : formStrings.noAdditionalNotes;
  return (
      <div className="dialog-content-container">
        <div className="field">
          <div className="label">{`${ingredients.totalPrice}:`}</div>
          <div className="order-data">{`${ingredients.currency}${saladTotalPrice}`}</div>
        </div>
        <div className="field">
          <div className="label">{`${formStrings.name}:`}</div>
          <div className="order-data">{orderDetails.name}</div>
        </div>
        <div className="field">
          <div className="label">{`${formStrings.email}:`}</div>
          <div className="order-data">{orderDetails.email}</div>
        </div>
        <div className="field">
          <div className="label">{`${formStrings.additionalNotes}:`}</div>
          <div className="order-data text-area">{additionalNote}</div>
        </div>
      </div>
  );
};

export default OrderDetailsDialog;
