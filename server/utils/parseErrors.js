module.exports = (err, req, res, next) => {
  const {
    status,
    details,
    message,
  } = err;

  res.status(status || 500).json({
    code: status,
    message,
    details,
  });
};
