const moment = require('moment');

const User = require('../../../models/user');
const UserActions = require('../../../models/userActions');
const createError = require('../../../utils/createError');

module.exports = async (req, res, next) => {
    const userActions = await UserActions.findOne({token: req.body.token});

    const errData = {
        path:   ['password'],
        type: 'not.found',
        message: 'not found',
        transKey: 'server.something.wrong'
    };


    if (! userActions || userActions && userActions.expiresAt < Date.now()) {
        return res.status(404)
            .json(createError(errData));
    }

    userActions.remove();

    const user = await User.findById(userActions.userId);
    if (user) {
        user.password = req.body.password;
        await user.save();

        res.status(200)
            .json({ok: true});
    } else {
        next({error: 1})
    }

};
