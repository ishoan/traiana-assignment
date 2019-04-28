import React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import {dialogStrings} from '../../../constants/Strings';

const DialogBox = ({title, onClickClose, isOpen, children}) => {

  return (
      <Dialog
          open={isOpen}
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClickClose()} color="primary">
            {dialogStrings.close}
          </Button>
        </DialogActions>
      </Dialog>
  );
};

export default DialogBox;