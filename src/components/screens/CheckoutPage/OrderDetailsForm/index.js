import React from "react";
import {formStrings} from '../../../../constants/Strings';
import {ValidationTypeList} from '../../../../constants/validationTypeList';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Style.css';

class OrderDetailsForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      additionalNotes: '',
      nameValid: false,
      emailValid: false,
      nameErrorMessage: '',
      emailErrorMessage: ''
    }
  }

  validationTest(input, validType) {
    const regexEmail = new RegExp(ValidationTypeList[validType].regex);
    return regexEmail.test(input.trim()) && input.trim().length > 0;
  }

  validateInput(input, validType) {
    let errorMessageCondition = input.trim().length > 0 ? ValidationTypeList[validType].errorFieldMessage : ValidationTypeList[validType].fieldIsEmpty;

    switch (validType) {
      case 'email':
        this.setState({emailErrorMessage: errorMessageCondition});
        break;
      case 'name':
        this.setState({nameErrorMessage: errorMessageCondition});
        break;
      default:
        break;
    }
    return this.validationTest(input, validType);
  }

  handleChangeSubmit() {
    const {name, email, additionalNotes, nameValid, emailValid} = this.state;
    const {onSubmit} = this.props;

    if (nameValid && emailValid && name.length > 0 && email.trim().length > 0) {
      let userOrderDetails = {
        name,
        email,
        additionalNotes
      };
      onSubmit(userOrderDetails);
    }
  }

  render() {
    const {name, email, additionalNotes, nameValid, emailValid, emailErrorMessage, nameErrorMessage} = this.state;

    return (
        <div className="form-container">
          <div className="title">
            {formStrings.pleaseEnter}
          </div>
          <form className="form-style" onSubmit={event => this.handleChangeSubmit(event)}>
            <TextField
                id="standard-name"
                label="Name"
                value={name}
                onChange={event => this.setState({name: event.target.value})}
                type="string"
                onBlur={() => this.setState({nameValid: this.validateInput(name, 'name')})}
            />
            <div className="errorMessage">
              { !nameValid ? nameErrorMessage : ''}
            </div>
            <TextField
                id="standard-name"
                label="Email"
                value={email}
                onChange={event => this.setState({email: event.target.value})}
                type="string"
                onBlur={() => this.setState({emailValid: this.validateInput(email, 'email')})}
            />
            <div className="errorMessage">
              { !emailValid ? emailErrorMessage : ''}
            </div>
            <TextField
                id="filled-textarea"
                label="Additional Notes"
                value={additionalNotes}
                onChange={event => this.setState({additionalNotes: event.target.value})}
                multiline
            />
            <Button
                variant="contained"
                className="submit-form-button"
                color="primary"
                disabled={!emailValid || !nameValid}
                onClick={() => this.handleChangeSubmit()}
            >
              {formStrings.submit}
            </Button>
          </form>
        </div>
    )
  }
}

export default OrderDetailsForm;