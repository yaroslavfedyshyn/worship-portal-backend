const Joi = require('@hapi/joi');

const registerSchema = {
    body: Joi.object({
        firstName: Joi.string().min(2).max(30).required(),
        lastName: Joi.string().min(2).max(30).required(),
        password: Joi.string().min(6).max(30).regex(/[a-zA-Z0-9]/)
            .required(),
        email: Joi.string().email().required()
    })
};

const loginSchema = {
    body: Joi.object({
        password: Joi.string().min(6).max(30).regex(/[a-zA-Z0-9]/)
            .required(),
        email: Joi.string().email().required(),
    })
};

const forgotPasswordSchema = {
    body: Joi.object({
        email: Joi.string().email().required(),
    })
};

const resetPasswordSchema = {
    body: Joi.object({
        password: Joi.string()
            .min(6)
            .max(30).regex(/[a-zA-Z0-9]/)
            .required(),

        token: Joi.string()
            .min(30)
            .max(30).regex(/[a-zA-Z0-9]/)
            .required(),
    })
};

module.exports = {
    registerSchema,
    loginSchema,
    forgotPasswordSchema,
    resetPasswordSchema,
};
