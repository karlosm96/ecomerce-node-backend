const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');
const invoiceController = require('./invoice_controller.js');

router.get('/downloadPdf/:fileName', invoiceController);
router.post('/pdfDocument', auth, invoiceController);

module.exports = router;