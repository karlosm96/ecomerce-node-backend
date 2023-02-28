const mongoose = require('mongoose');
const newSchema = mongoose.Schema;

const productoSchema = new newSchema({
    id_producto: String,
    cantidad: Number,
    total: Number
});

const detalleFacturaSchema = new newSchema({
    id_encabezado_factura: String,
    productos: [{type: productoSchema}]
},
{
    timestamps: true,
    versionKey: false
});

const detalleFacturasModel = mongoose.model('detalle_facturas', detalleFacturaSchema);

module.exports = detalleFacturasModel;