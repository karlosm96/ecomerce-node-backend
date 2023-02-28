const mongoose = require('mongoose');
const newSchema = mongoose.Schema;

const clienteSchema = new newSchema({
    id: {type: String, required : true, trim: true, unique: true},
    nombre: String,
    telefono: String,
    fechaNacimiento: Date,
    pais: String,
    direccion: String,
},
{
    timestamps: true,
    versionKey: false
});

const clientesModel = mongoose.model('clientes', clienteSchema);

module.exports = clientesModel;