const express = require('express');

const router = express.Router();
const controller = require('../controllers/user');
const middleware = require('../middleware');

router.route('/')
    .get(controller.list)
    .post(middleware.facebook, controller.post);

router.route('/:userId')
    .get(middleware.user, controller.get)
    .put(middleware.user, controller.put)
    .patch(middleware.facebook, middleware.user, controller.patch)
    .delete(middleware.user, controller.delete);

module.exports = router;