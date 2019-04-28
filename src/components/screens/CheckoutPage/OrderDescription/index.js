import React from "react";
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import {ingredients, checkoutString} from '../../../../constants/Strings';

const OrderDescription = ({Orders, totalPrice}) => {

  const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: '#009933',
      color: theme.palette.common.white,
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    body: {
      fontSize: 15,
      textAlign: 'center'
    },
    footer: {
      fontSize: 15,
      color: 'black',
      textAlign: 'center'
    }
  }))(TableCell);

  const renderSelectedIngredients = () => {
    return Orders.map(item => {
      return (<TableRow key={item.id}>
        <CustomTableCell>{item.name}</CustomTableCell>
        <CustomTableCell>{item.amount}</CustomTableCell>
        <CustomTableCell>{`${ingredients.currency}${item.price}`}</CustomTableCell>
        <CustomTableCell>{`${ingredients.currency}${item.totalPrice}`}</CustomTableCell>
      </TableRow>);
    });
  };

  return (<Table>
    <TableHead>
      <TableRow>
        <CustomTableCell>{ingredients.name}</CustomTableCell>
        <CustomTableCell>{checkoutString.amount}</CustomTableCell>
        <CustomTableCell>{checkoutString.pricePerUnit}</CustomTableCell>
        <CustomTableCell>{ingredients.totalPrice}</CustomTableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {renderSelectedIngredients()}
    </TableBody>
    <TableFooter>
      <TableRow>
        <CustomTableCell>{'Salad total price'}</CustomTableCell>
        <CustomTableCell>{totalPrice}</CustomTableCell>
      </TableRow>
    </TableFooter>
  </Table>);
};

OrderDescription.defaultProps = {
  totalPrice: '',
  Orders: []
};

export default OrderDescription;