const validator = require('express-joi-validation').createValidator({
  passError: true
});

module.exports = (joiSchema, options) => {
  options = options || {
    abortEarly: false,
  };
  const result = [];

  if (joiSchema.body) {
     result.push(validator.body(joiSchema.body, {joi: options}))
  }

  if (joiSchema.query) {
    result.push(validator.query(joiSchema.query, {joi: options}))
  }

  if (joiSchema.params) {
    result.push(validator.params(joiSchema.params, {joi: options}))
  }

  return result;
};
