module.exports = (joiSchema) => function (req, res, next) {
  const data = { ...req.body, ...req.query, ...req.param };

  const { error } = joiSchema.validate(data);

  error ? next(error) : next();
};
