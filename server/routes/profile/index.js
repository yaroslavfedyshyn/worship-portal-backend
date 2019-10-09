const { Router } = require('express');

const changePassword = require('./changePassword/_post');
const isAuthorized = require('../isAuthorized');
const validate = require('../schemaValidate');

const {
    changePasswordSchema,
} = require('./joiSchemas');

const router = Router();


router.use(isAuthorized);

router.route('/password/change')
    .post(...validate(changePasswordSchema), changePassword);
module.exports = router;
