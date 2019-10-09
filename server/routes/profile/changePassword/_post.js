const User = require('../../../models/user');
const createError = require('../../../utils/createError');

module.exports = async (req, res, next) => {
    const {
        user: {_id},
        passwords: {currentPassword, password}
    } = req.body;


    const errData = {
        generalMessage: 'not found',
        transKey: 'server.error.something.went.wrong'
    };

    const user = await User.findById(_id);

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
