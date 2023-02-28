const clienteModel = require('../models/cliente_model.js');
const express = require('express');
const router = express.Router();

router.get('/list', (req, res) =>{
    clienteModel.find({}, function(docs, err){
        if(!err){
            res.send(docs);
        } else{
            res.send(err);
        }
    })
});

router.get('/findById/:id', (req, res) =>{
    clienteModel.findOne({ id: req.params.id }, function(docs, err){
        if(!err){
            res.send(docs);
        } else{
            res.send(err);
        }
    })
});

router.post('/add', (req, res) =>{
    const {id, nombre, telefono, fechaNacimiento, pais, direccion} = req.body;
    const newCliente = new clienteModel({
        id,
        nombre,
        telefono,
        fechaNacimiento,
        pais,
        direccion
    });
    newCliente.save(function(err){
        if(!err){
            res.send("Se ha registrado un nuevo cliente");
        } else{
            res.send(`Error en la carga del registro: ${err}`);
        }
    })
});

router.put('/update/:id', (req, res) =>{
    const {nombre, telefono, fechaNacimiento, pais, direccion} = req.body;
    clienteModel.findOneAndUpdate({ id: req.params.id },
    {
        nombre,
        telefono,
        fechaNacimiento, 
        pais,
        direccion
    },
    (err)=>{
        if(!err){
            res.send("Los datos del cliente han sido actualizados");
        } else{
            res.send(`Error en la actualizacion del cliente: ${err}`);
        }
    })
});

router.delete('delete/:id', (req, res) =>{
    clienteModel.findOneAndDelete({ id: req.params.id }, function(err){
        if(!err){
            res.send("El cliente se ha eliminado con exito");
        } else{
            res.send(`Error: ${err}`);
        }
    })
});

module.exports = router;