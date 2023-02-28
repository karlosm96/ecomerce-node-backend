const encabezadoFacturasModel = require('../models/encabezado_facturas_model.js');
const express = require('express');
const router = express.Router();

router.get('/list', (req, res) =>{
    encabezadoFacturasModel.find({}, function(docs, err){
        if(!err){
            res.send(docs);
        } else{
            res.send(err);
        }
    })
});

router.get('/findById/:id', (req, res) =>{
    encabezadoFacturasModel.findOne({ id: req.params.id }, function(docs, err){
        if(!err){
            res.send(docs);
        } else{
            res.send(err);
        }
    })
});

router.get('/findByIdCliente/:idCliente', (req, res) =>{
    encabezadoFacturasModel.find({ id_cliente: req.params.idCliente }, function(docs, err){
        if(!err){
            res.send(docs);
        } else{
            res.send(err);
        }
    })
});

router.get('findByEstado/:estado', (req, res) =>{
    encabezadoFacturasModel.find({ activo: req.params.estado }, function(docs, err){
        if(!err){
            res.send(docs);
        } else{
            res.send(err);
        }
    })
});

router.post('/add', (req, res) =>{
    const { id, fecha, id_cliente, activo } = req.body;
    const newEncabezadoFacturas = new encabezadoFacturasModel({
        id,
        fecha,
        id_cliente, 
        activo
    });
    newEncabezadoFacturas.save(function(err){
        if(!err){
            res.send("Un nuevo Encabezado de Factura se ha agregado con exito");
        } else{
            res.send(`Error en la carga del registro: ${err}`);
        }
    })
});

router.put("/update/:id", (req, res) =>{
    const { fecha, id_cliente, activo } = req.body;
    encabezadoFacturasModel.findByIdAndUpdate({ id: req.params.id }, {
        fecha,
        id_cliente,
        activo
    },
    function(err){
        if(!err){
            res.send("El Encabezado de Factura ha sido actualizado");
        } else{
            res.send(`Error en la actualizacion del Encabezado de Factura: ${err}`);
        }
    })
});

router.delete('/delete/:id', (req, res) =>{
    encabezadoFacturasModel.findByIdAndDelete({ id: req.params.id }, function(err){
        if(!err){
            res.send("El Encabezado de Factura se ha eliminado con exito");
        } else{
            res.send(`Error: ${err}`);
        }
    })
});

module.exports = router;