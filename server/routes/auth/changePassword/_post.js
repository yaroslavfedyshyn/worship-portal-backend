const User = require('../../../models/user');
const Session = require('../../../models/session');
const createError = require('../../../utils/createError');

module.exports = async (req, res, next) => {
    const {
        sessionToken
    } = req.cookies;

    const {currentPassword, password} = req.body;

    const errData = {
        generalMessage: 'not found',
        transKey: 'server.error.something.went.wrong'
    };

    const {userId} = await Session.findOne({token: sessionToken});

    if (!userId) {
        return res.status(404)
            .json(createError(errData));
    }

    const user = await User.findOne({_id: userId, password: currentPassword});

    if (!user) {
        return res.status(404)
            .json(createError(errData));
    }

    user.password = password;
    await user.save();

    res.status(200)
        .json({ok: true});
};
