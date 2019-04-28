export const ValidationTypeList = {
  email: {
    regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    errorFieldMessage: 'Email is not valid',
    fieldIsEmpty: 'Email input is required'
  },

  textArea: {
    regex: /.?/,
    errorFieldMessage: '',
    fieldIsEmpty: ''
  },

  name: {
    regex: /^([a-z0-9]*[a-z]){2}[a-z0-9]*$/i,
    errorFieldMessage: 'Name is not valid',
    fieldIsEmpty: 'Name input is required'
  }
};
