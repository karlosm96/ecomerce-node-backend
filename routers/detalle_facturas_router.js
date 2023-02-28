const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');
const controllerDetalleFaturas = require('../controllers/detalle_facturas_controller.js');

router.get('/list', auth, controllerDetalleFaturas);
router.get('/findById/:idEncabezadoFactura', auth, controllerDetalleFaturas);
router.put('/update/:idEncabezadoFactura', auth, controllerDetalleFaturas);
router.post('/add', controllerDetalleFaturas);
router.delete('/delete/:idEncabezadoFactura', auth, controllerDetalleFaturas);

module.exports = router;