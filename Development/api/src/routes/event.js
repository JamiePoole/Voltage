const express = require('express');

const router = express.Router();
const controller = require('../controllers/event');
const middleware = require('../middleware');

router.route('/')
    .get(controller.list)
    .post(middleware.facebook, controller.post);

router.route('/:eventId')
    .get(controller.get)
    .put(controller.put)
    .patch(controller.patch)
    .delete(controller.delete);

module.exports = router;