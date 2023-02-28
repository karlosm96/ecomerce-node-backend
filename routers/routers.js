const express = require('express');
const router = express.Router();

const routerAuth = require('./auth_router.js');
router.use('/auth', routerAuth);

const routerProductos = require('./productos_router.js');
router.use('/productos', routerProductos);

const routerClientes = require('./clientes_router.js');
router.use('/clientes', routerClientes);

const routerEncabezadoFacturas = require('./encabezado_facturas_router.js');
router.use('/encabezado_facturas', routerEncabezadoFacturas);

const routerDetalleFacturas = require('./detalle_facturas_router.js');
router.use('/detalle_facturas', routerDetalleFacturas);

const routerUsuarios = require('./usuarios_router.js');
router.use('/usuarios', routerUsuarios);

const routerNodeMailer = require('../nodeMailer/nodeMailer_router.js');
router.use('/contactUs', routerNodeMailer);

const routerInvoice = require('../invoiceService/invoice_router.js');
router.use('/document', routerInvoice);

module.exports = router;