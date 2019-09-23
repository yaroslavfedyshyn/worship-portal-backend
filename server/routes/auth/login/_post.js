const Session = require('../../../models/session');
const User = require('../../../models/user');
const tokenGenerate = require('../../../utils/generateString');
const { GENERATE_SESSION_TOKEN_LENGTH } = require('../../../constants');

module.exports = async (req, res, next) => {
  const {
    email,
    password,
  } = req.body;

  try {
    const user = User.findOne({ email }, async (err, user) => {
      user.comparePassword(password, async (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          const session = new Session({
            token: tokenGenerate(GENERATE_SESSION_TOKEN_LENGTH),
            userId: user._id,
          });

          await session.save();

          res.cookie('sessionToken', session.token, { maxAge: 900000, httpOnly: true });
          res.send(user);
        }
      });
    });
  } catch (error) {
    next(error);
  }
};
