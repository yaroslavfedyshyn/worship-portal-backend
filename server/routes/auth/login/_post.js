const Session = require('../../../models/session');
const User = require('../../../models/user');
const tokenGenerate = require('../../../utils/generateString');
const {GENERATE_SESSION_TOKEN_LENGTH, SESSION_TOKEN_MAX_AGE} = require('../../../constants');
const createError = require('../../../utils/createError');

module.exports = async (req, res, next) => {
    const {
        email,
        password,
    } = req.body;

    const user = await User.findOne({email});

    if (!user) {
        const errData = {
            generalMessage: 'invalid email or password',
            transKey: 'server.error.invalid.email.or.password'
        };

        return res.status(422)
            .json(createError(errData))
    }

    const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            const errData = {
                generalMessage: 'invalid email or password',
                transKey: 'server.error.invalid.email.or.password'
            };


            return res.status(422)
                .json(createError(errData))

        }

        const session = new Session({
            token: tokenGenerate(GENERATE_SESSION_TOKEN_LENGTH),
            userId: user._id,
        });

        await session.save();

        res.cookie('sessionToken', session.token, {maxAge: SESSION_TOKEN_MAX_AGE, httpOnly: true})
            .status(200)
            .json(user);
};
