const Usuario = require("../models/usuario_model.js");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: "variables.env" });

exports.autenticarUsuario = async (req, res) => {
  //Revisar si hay errores

  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { userName, email, password } = req.body;

  try {
    //revisar que sea un usuario registrado
    let usuario = {};
    let pass = "";
    let usuarioName = await Usuario.findOne({ userName });
    let usuarioEmail = await Usuario.findOne({ email });

    // Verificar la existencia del ususario
    // Verfifincar validez del password

    if (!usuarioEmail && !usuarioName) {
      return res.status(400).json({ msg: "El usuario no existe" });
    } 
    else if(usuarioEmail && !usuarioName){
      usuario = usuarioEmail;
      pass = await bcryptjs.compare(password, usuario.password);
    }
    else if(!usuarioEmail && usuarioName){
      usuario = usuarioName;
      pass = await bcryptjs.compare(password, usuario.password);
    }
    else{
      usuario = usuarioEmail;
      pass = await bcryptjs.compare(password, usuario.password);
    }
    
    if (!pass) {
      return res.status(400).json({ msg: "Contraseña incorrecta" });
    }

    //Si todo es correcto, crear y firmar el token
    const payload = {
      usuario: { id: usuario.id },
    };

    jwt.sign(
      payload,
      process.env.SECRETA, // --> Se debe cambiar por la valiable de entorno
      {
        expiresIn: 2 * 60 * 60, //2 horas
      },
      (error, token) => {
        if (error) throw error;

        //Mensaje de confirmación
        res.json({ token, payload });
      }
    );
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error en esta seccion");
  }
};

exports.usuarioAutenticado = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({id: req.params.id});
    res.json({ usuario });
  } catch (error) {
    res.status(500).json({ msg: "Hubo un error" });
  }
};
