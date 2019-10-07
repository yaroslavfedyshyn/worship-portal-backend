module.exports = async (req, res, next) => {
  try {
    res.json(req.user);
  } catch (error) {
    res.json({ok: 0});
  }
};
