const express = require('express');

const router = express.Router();
const auth = require('../middleware/auth');
const event = require('./event');
const user = require('./user');

router.use(auth);
router.use('/event', event);
router.use('/user', user);

module.exports = router;