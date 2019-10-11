const Joi = require('@hapi/joi');

const changePasswordSchema = {
    body: Joi.object({
            password: Joi.string()
                .min(6)
                .max(30).regex(/[a-zA-Z0-9]/)
                .required(),

            currentPassword: Joi.string()
                .min(6)
                .max(30).regex(/[a-zA-Z0-9]/)
                .required(),
    })
};

module.exports = {
    changePasswordSchema,
};
