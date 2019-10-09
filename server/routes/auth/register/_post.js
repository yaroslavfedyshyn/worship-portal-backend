const User = require('../../../models/user');
const sendEmail = require('../../../utils/emailer/nodeEmailer');
const {WELCOME_EMAIL_CONTENT} = require("../../../constants");
const createError = require ('../../../utils/createError');

module.exports = async (req, res, next) => {

    const {
        firstName,
        lastName,
        email,
        password,
    } = req.body;

    const sameEmail = await User.findOne({email});

    if (sameEmail) {
        const errData = {
            generalMessage: 'email isn`t unique',
            path:   ['email'],
            type: 'not.unique',
            message: 'this email is already taken'
        };

        return res.status(422)
            .json(createError(errData))
    }

    const user = new User({
        firstName,
        lastName,
        email,
        password,
    });

    console.log(password)

    const savedUser = await user.save();

    if (savedUser) {
        const mailContent = `Hello ${firstName}. ${WELCOME_EMAIL_CONTENT}`;

        sendEmail(email, 'Welcome to Worship Portal', mailContent);
    }

    res.json(savedUser);
};
