const validator = require('express-joi-validation').createValidator({
  passError: true
});

module.exports = (joiSchema, options = {}) => {
  const joiOptions = {
    abortEarly: false,
    ...options,
  };
  const result = [];

  if (joiSchema.body) {
     result.push(validator.body(joiSchema.body, {joi: joiOptions}))
  }

  if (joiSchema.query) {
    result.push(validator.query(joiSchema.query, {joi: joiOptions}))
  }

  if (joiSchema.params) {
    result.push(validator.params(joiSchema.params, {joi: joiOptions}))
  }

  return result;
};
