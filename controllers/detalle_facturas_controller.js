const detalleFacturaModel = require('../models/detalle_facturas_model.js');
const express = require('express');
const router = express.Router();

router.get('/list', (req, res) =>{
    detalleFacturaModel.find({}, function(docs, err){
        if(!err){
            res.send(docs);
        } else{
            res.send(err);
        }
    })
});

router.get('/findById/:idEncabezadoFactura', (req, res) =>{
    detalleFacturaModel.findOne({ id_encabezado_factura: req.params.idEncabezadoFactura }, function(docs, err){
        if(!err){
            res.send(docs);
        } else{
            res.send(err);
        }
    })
});

router.post('/add', (req, res) =>{
    const { id_encabezado_factura, productos } = req.body;
    const newDetalleFactura = new detalleFacturaModel({
        id_encabezado_factura,
        productos
    });
    newDetalleFactura.save(function(err){
        if(!err){
            res.send("El Detalle de Factura se ha agregado con exito");
        } else{
            res.send(`Error en la carga del registro: ${err}`);
        }
    })
});

router.put('/update/:idEncabezadoFactura', (req, res) =>{
    const { id_encabezado_factura } = req.body;
    const { productos } = req.body;
    detalleFacturaModel.findOneAndUpdate({ id_encabezado_factura: req.params.idEncabezadoFactura }, 
    {
        id_encabezado_factura,
        productos : productos
    },
    function(err){
        if(!err){
            if(!err){
                res.send("El Detalle de la Factura se ha actualizado con exito");
            } else{
                res.send(`Error en la actualizacion del Detalle de la Factura: ${err}`);
            }
        }
    })
});

router.delete('/delete/:idEncabezadoFactura', (req, res) =>{
    detalleFacturaModel.findByIdAndDelete({ id_encabezado_factura: req.params.idEncabezadoFactura }, function(err){
        if(!err){
            res.send("El Detalle de Factura se ha eliminado con exito");
        } else{
            res.send(`Error: ${err}`);
        }
    })
});

module.exports = router;