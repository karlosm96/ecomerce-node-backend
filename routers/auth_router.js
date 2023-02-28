//Rutas para autenticar usuarios

const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../controllers/auth_controller.js");
const auth = require("../middleware/auth.js");

// Autentica un usuario
// api/auth
router.post(
  "/",
  [
    check("userName", "El nombre es obligatorio").not().isEmpty(),
    check("email", "Agrega un email válido").not().isEmpty(),
    check("password", "El password debe ser mínimo de 8 caracteres").isLength({ min: 8, })
  ],
  authController.autenticarUsuario
);

router.get('/:id', auth, authController.usuarioAutenticado);

module.exports = router;

