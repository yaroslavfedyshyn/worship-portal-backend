const moment = require('moment');


const User = require('../../../models/user');
const UserActions = require('../../../models/userActions');

module.exports = async (req, res, next) => {
  try {
    const userActions = await UserActions.findOne({ token: req.body.token });

    if (!userActions) {
      res.status(404);
      return res.send('Not found');
    }

    if (userActions && userActions.expiresAt < Date.now()) {
      res.status(403);
      return res.send('Token is overdue');
    }

    userActions.remove();

    const user = await User.findById(userActions.userId);
    if (user) {
      user.password = req.body.password;
      await user.save();

      res.status(200);
      res.json({ok: 1});
    } else {
      next({error: 1})
    }

  } catch (error) {
    next(error);
  }
};
