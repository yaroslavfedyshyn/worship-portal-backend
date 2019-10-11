const createError = require('../../../utils/createError');

module.exports = async ({body, user}, res, next) => {
    const {
        currentPassword,
        password
    } = body;

    const errData = {
        generalMessage: 'not found',
        transKey: 'server.error.old.password.does.not.match'
    };

    if (!user || user.comparePassword(currentPassword) === false) {
        return res.status(404)
            .json(createError(errData));
    }

    user.password = password;
    const savedUser = await user.save();

    if (savedUser) {
        res.status(200)
            .json({ok: true});
    }
};
