const express = require('express');
const router = express.Router();
const controllernodeMailer = require('./nodeMailer_controller.js');

router.post('/send', controllernodeMailer);

module.exports = router;