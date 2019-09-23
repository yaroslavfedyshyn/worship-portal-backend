const moment = require('moment');

const UserActions = require('../../../models/userActions');
const User = require('../../../models/user');
const tokenGenerate = require('../../../utils/generateString');
const { GENERATE_RESET_PASSWORD_TOKEN_LENGTH } = require('../../../constants');
const sendEmail = require('../../../utils/nodeEmailer');

module.exports = async (req, res, next) => {
  const {
    email,
  } = req.body;

  try {
    const user = await User.findOne({ email });
    const userActions = new UserActions({
      token: tokenGenerate(GENERATE_RESET_PASSWORD_TOKEN_LENGTH),
      expiresAt: moment().add(30, 'minutes').toDate(),
      userId: user._id,
    });

    await userActions.save();
    const link = `${process.env.FRONTEND_HOST}${process.env.FRONTEND_RESET_PASSWORD_URL}?token=${userActions.token}`;
    sendEmail(email, 'Reset password link', link);

    res.send('ok');
  } catch (error) {
    next(error);
  }
};
