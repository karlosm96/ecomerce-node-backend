const Usuario = require('../models/usuario_model.js');
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: "variables.env" });

exports.crearUsuario = async (req, res) =>{
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({ errores: errores.array() });
    } 

    const { id, userName, email, password } = req.body;

    try{
        let usuarioId = await Usuario.findOne({ id });
        let usuarioName = await Usuario.findOne({ userName });
        let usuarioEmail = await Usuario.findOne({ email });
        if (usuarioEmail || usuarioName || usuarioId) {
            return res.status(400).json({ msg: "El usuario ya existe" });
        }
    
        //crear el nuevo usuario
        const usuario = new Usuario({
            id, 
            userName, 
            email, 
            password
        });
    
        usuario.password = await bcryptjs.hash(password, 10);
    
        //Guardar usuario en la bd
        await usuario.save();
    
        //Firmar el JWT
        const payload = {
            usuario: { id: usuario.id },
        };
    
        jwt.sign(
            payload,
            process.env.SECRETA, // cambiar
            {
            expiresIn: 3600, //1 hora
            },
            (err, token) => {
            if (err) throw err;
    
            //Mensaje de confirmación
            res.json({ token });
            }
        );
    } catch (error) {
        console.log("Hubo un error");
        console.log(error);
        res.status(400).send("Hubo un error");
    }
}