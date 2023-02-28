const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });

module.exports = function (req, res, next) {
  //leer el token del header
  const token = req.header("x-auth-token");

  //revisar si no hay token

  if (!token) {
    return res.status(400).json({ msg: "No hay token, Permiso no válido" });
  }

  //validar token

  try {
    const cifrado = jwt.verify(token, process.env.SECRETA);  // --> Se debe cambiar por la valiable de entorno --> process.env.SECRETA
    req.usuario = cifrado.usuario;
    next();

  } catch (error) {
    res.send(error);
    res.status(400).json({ msg:"Token no válido" });
  }

};
