const User = require('../../../models/user');
const sendEmail = require('../../../utils/nodeEmailer');
const {WELCOME_EMAIL_CONTENT} = require("../../../constants");

module.exports = async (req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        password,
    } = req.body;

    const sameEmail = await User.findOne({email});

    if (sameEmail) {
       return res.status(422).json({
            message: 'this email is already taken',
            details: [
                {
                    path: ['email'],
                    type: 'not.unique',
                    message: 'this email is already taken'
                }
            ]
        })
    }

    const user = new User({
        firstName,
        lastName,
        email,
        password,
    });

    const userIsSaved = await user.save();

    if (userIsSaved) {
        const mailContent = `Hello ${firstName}. ${WELCOME_EMAIL_CONTENT}`;

        sendEmail(email, 'Welcome to Worship Portal', mailContent);

        res.send(userIsSaved);
    }
};
