const { Router } = require('express');
const authRoutes = require('./auth');
const isAuthorized = require('./auth/isAuthorized');

const router = Router();

router.use('/auth', authRoutes);

router.use(isAuthorized);

module.exports = router;
