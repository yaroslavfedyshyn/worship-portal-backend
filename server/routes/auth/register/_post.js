const User = require('../../../models/user');

module.exports = async (req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        password,
    } = req.body;

    try {

        const sameEmail = await User.findOne({email});

        if (sameEmail) {
          res.status(422);
            res.json({
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

        const result = await user.save();
        res.send(result);
    } catch (error) {
        next(error); // ?
    }
};
