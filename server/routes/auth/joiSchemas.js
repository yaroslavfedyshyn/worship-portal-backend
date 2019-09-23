const Joi = require('@hapi/joi');

const registerSchema = Joi.object({
  firstName: Joi.string().min(2).max(30).required(),
  lastName: Joi.string().min(2).max(30).required(),
  password: Joi.string().min(6).max(30).regex(/[a-zA-Z0-9]{6,30}/)
    .required(),
  email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(30).regex(/[a-zA-Z0-9]{6,30}/)
    .required(),
  email: Joi.string().email().required(),
});

const forgotPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
});

const resetPasswordSchema = Joi.object({
  password: Joi.string().min(6).max(30).regex(/[a-zA-Z0-9]{6,30}/)
    .required(),
});

module.exports = {
  registerSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
};
