const moment = require('moment');

const UserActions = require('../../../models/userActions');

module.exports = async (req, res, next) => {
  try {
    const userActions = await UserActions.findOne({ token: req.body.token });

    if (!userActions) {
      res.status(404);
      res.send('Not found');
      return next('Not found');
    }

    if (userActions && userActions.expiresAt < Date.now()) {
      res.status(403);
      res.send('Token is overdue');
      return next('Token is overdue');
    }

    userActions.remove();

    res.status(200);
    res.send('ok');
  } catch (error) {
    next(error);
  }
};
