const mongoose = require('mongoose');
const newSchema = mongoose.Schema;

const encabezadoFacturaSchema = new newSchema({
    id: String,
    fecha: Date,
    id_cliente: String,
    activo: Boolean
},
{
    timestamps: true,
    versionKey: false
});

const encabezadoFacturaModel = mongoose.model('encabezado_factura', encabezadoFacturaSchema);

module.exports = encabezadoFacturaModel;