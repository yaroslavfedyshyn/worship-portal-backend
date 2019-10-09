const { Router } = require('express');
const authRoutes = require('./auth');
const profileRoutes = require('./profile');
const isAuthorized = require('./isAuthorized');

const router = Router();

router.use('/auth', authRoutes);

router.use('/profile', profileRoutes);

router.use(isAuthorized);

module.exports = router;
