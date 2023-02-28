const mongoose = require('mongoose');
const newSchema = mongoose.Schema;

const productoSchema = new newSchema({
    //_id: mongoose.Schema.Types.ObjectId,
    id: {type: String, required : true, trim: true, unique: true},
    categoria: {type: String , trim: true},
    nombre: {type: String , trim: true},
    marca: {type: String , trim: true},
    precio: {type: Number, required : true, maxLength:9999999},
    imagen: {type: String , trim: true},
    estado: {type: Boolean, required : true}
},
{
    timestamps: true,
    versionKey: false
});

const productosModel = mongoose.model('productos', productoSchema);

module.exports = productosModel;