const productoModel = require('../models/productos_model.js');
const express = require('express');
const router = express.Router();

router.get('/list', (req, res) =>{
    productoModel.find({}, function(docs, err){
        if(!err){
            res.send(docs);
        } else{
            res.send(err);
        }
    })
});

router.get('/findById/:id', (req, res) =>{
    productoModel.findOne({ id: req.params.id }, function(docs, err){
        if(!err){
            res.send(docs);
        } else{
            res.send(err);
        }
    })
});

router.get('/findByName/:nombre', (req, res) =>{
    productoModel.findOne({ nombre: req.params.nombre }, function(docs, err){
        if(!err){
            res.send(docs);
        } else{
            res.send(err);
        }
    })
});

router.get('/findByCategory/:categoria', (req, res) =>{
    productoModel.find({ categoria: req.params.categoria }, function(docs, err){
        if(!err){
            res.send(docs);
        } else{
            res.send(err);
        }
    })
});

router.get('/findByMarca/:marca', (req, res) =>{
    productoModel.find({ marca: req.params.marca }, function(docs, err){
        if(!err){
            res.send(docs);
        } else{
            res.send(err);
        }
    })
});

router.get('/findByPrice/:min/:max', (req, res) =>{
    productoModel.find({ precio: {$gte: Number(req.params.min), $lte: Number(req.params.max)}}, function(docs, err){
        if(!err){
            // let sortedProducts = Object.entries(docs).sort((a,b)=> a[1].precio-b[1].precio); 
            res.send(docs);
        } else{
            res.send(err);
        }
    })
});

router.post('/add', (req, res) =>{
    const { id, categoria, nombre, marca, precio, imagen, estado } = req.body;
    const newProducto = new productoModel({
        id,
        categoria,
        nombre,
        marca,
        precio,
        imagen,
        estado
    });
    newProducto.save(function(err){
        if(!err){
            res.send("Un nuevo Producto se ha agregado con exito");
        } else{
            res.send(`Error en la carga del registro: ${err}`);
        }
    })
});

router.put('/update/:id', (req, res) =>{
    const { categoria, nombre, marca, precio, imagen, estado } = req.body;
    productoModel.findOneAndUpdate({ id: req.params.id }, {
        categoria,
        nombre,
        marca,
        precio,
        imagen,
        estado
    },
    function(err){
        if(!err){
            res.send("El Producto ha sido actualizado");
        } else{
            res.send(`Error en la actualizacion del Producto: ${err}`);
        }
    })
});

router.delete('/delete/:id', (req, res) =>{
    productoModel.findOneAndDelete({ id: req.params.id }, function(err){
        if(!err){
            res.send("El Producto se ha eliminado con exito");
        } else{
            res.send(`Error: ${err}`);
        }
    })
});

module.exports = router;