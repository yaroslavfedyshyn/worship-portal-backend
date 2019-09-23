const Session = require('../../models/session');
const User = require('../../models/user');

module.exports = async (req, res, next) => {
  try {
    if (!req.cookies || !req.cookies.sessionToken) {
      res.status(401);
      return res.send('Unauthorized');
    }

    const session = await Session.findOne({ token: req.cookies.sessionToken });

    if (!session) {
      res.status(401);
      return res.send('Unauthorized');
    }

    const user = await User.findById(session.userId);

    if (!user) {
      res.status(401);
      return res.send('Unauthorized');
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};
