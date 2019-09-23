module.exports = async (req, res, next) => {
  try {
    res.send(req.user);
  } catch (error) {
    next(error);
  }
};
