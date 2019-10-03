const Session = require('../../../models/session');
const User = require('../../../models/user');
const createError = require('../../../utils/createError');

module.exports = async (req, res, next) => {

    const {
        sessionToken
    } = req.cookies;

    const session = await Session.findOneAndDelete({token: sessionToken});

    res.clearCookie('sessionToken')
        .json({ok: true});
};
