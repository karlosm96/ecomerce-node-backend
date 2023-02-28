const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');
const controllerEncabezadoFacturas = require('../controllers/encabezado_facturas_controller.js');

router.get('/list', auth, controllerEncabezadoFacturas);
router.get('/findById/:id', auth, controllerEncabezadoFacturas);
router.get('/findByIdCliente/:idCliente', auth, controllerEncabezadoFacturas);
router.get('/findByEstado/:estado', auth, controllerEncabezadoFacturas);
router.put('/update/:id', auth, controllerEncabezadoFacturas);
router.post('/add', controllerEncabezadoFacturas);
router.delete('/delete/:id', auth, controllerEncabezadoFacturas);

module.exports = router;