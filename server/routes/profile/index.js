const { Router } = require('express');

const changePassword = require('./changePassword/_post');
const validate = require('../schemaValidate');

const {
    changePasswordSchema,
} = require('./joiSchemas');

const router = Router();

router.route('/password/change')
    .post(...validate(changePasswordSchema), changePassword);
module.exports = router;
