const { Router } = require('express');
const authRoutes = require('./auth');
const profileRoutes = require('./profile');
const isAuthorized = require('./isAuthorized');

const router = Router();

router.use('/auth', authRoutes);

router.use(isAuthorized);
router.use('/profile', profileRoutes);

module.exports = router;
