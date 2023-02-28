const mongoose = require('mongoose');
require('dotenv').config({ path: './var.env' })
const URL = process.env.DB_MONGO ;

mongoose.set('strictQuery', false);

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const myconection = mongoose.connection;

myconection.on('connected', ()=>{
    console.log("successful connection");
})

myconection.on('error', ()=>{
    console.log("Something goes wrong, connection failed");
})

module.exports = mongoose;