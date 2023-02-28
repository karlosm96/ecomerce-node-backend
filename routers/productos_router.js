const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');
const controllerProducto = require('../controllers/productos_controller.js');

router.get('/list', controllerProducto);
router.get('/findById/:id', controllerProducto);
router.get('/findByName/:nombre', controllerProducto);
router.get('/findByCategory/:categoria', controllerProducto);
router.get('/findByMarca/:marca', controllerProducto);
router.get('/findByPrice/:min/:max', auth, controllerProducto);
router.put('/update/:id', controllerProducto);
router.post('/add', auth, controllerProducto);
router.delete('/delete/:id', auth, controllerProducto);

module.exports = router;