const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');
const controllerClientes = require('../controllers/clientes_controller.js');

router.get('/list', auth, controllerClientes);
router.get('/findById/:id', auth, controllerClientes);
router.put('/update/:id', auth, controllerClientes);
router.post('/add', controllerClientes);
router.delete('/delete/:id', auth, controllerClientes);

module.exports = router;