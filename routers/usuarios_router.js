//Rutas para crear usuarios
const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuario_controller.js");
const { check } = require("express-validator");

// Crea un usuario

//api/usuarios
router.post(
  "/",
  [
    check("id", "El id es obligatorio").not().isEmpty(),
    check("userName", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe ser mínimo de 6 caracteres").isLength({ min: 8, }),
    check("email", "Agrega un email válido").isEmail()
  ],
  usuarioController.crearUsuario
);

module.exports = router;