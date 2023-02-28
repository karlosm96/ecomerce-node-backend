const mongoose = require('mongoose');
const newScheme = mongoose.Schema;

const usuarioSchema = new newScheme({
    id: {type: String, required : true, trim: true},
    userName: {type: String, required : true, trim: true, unique: true},
    password: {type: String, required : true, trim: true, min: 8},
    email: {type: String, required : true, trim: true, unique: true}
},
{
    timestamps: true,
    versionKey: false
});

const ususariosModel = mongoose.model('usuarios', usuarioSchema);

module.exports = ususariosModel;