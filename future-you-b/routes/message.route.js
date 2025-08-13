const express = require('express');
const { scheduleMessage } = require('../controllers/message.controller');
const router = express.Router();

router.post('/messages', scheduleMessage);

module.exports = router;
