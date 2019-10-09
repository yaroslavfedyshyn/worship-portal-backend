const { Router } = require('express');

const register = require('./register/_post');
const login = require('./login/_post');
const getMe = require('./getMe/_get');
const forgotPassword = require('./forgotPassword/_post');
const resetPassword = require('./resetPassword/_post');
const logout = require('./logout/_post');
const isAuthorized = require('../isAuthorized');
const validate = require('../schemaValidate');
const {
  registerSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
} = require('./joiSchemas');

const router = Router();
router.route('/register')
  .post(...validate(registerSchema), register);

router.route('/login')
  .post(...validate(loginSchema), login);

router.route('/password/forgot')
  .post(...validate(forgotPasswordSchema), forgotPassword);

router.route('/password/reset')
  .post(...validate(resetPasswordSchema), resetPassword);

router.use(isAuthorized);
router.route('/profile')
  .get(getMe);

router.route('/logout')
  .post(logout);

module.exports = router;
