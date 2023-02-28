require("dotenv").config({ path: "./var.env" });
const cors = require('cors');
const express = require('express');
const routers = require('./routers/routers.js');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());

//DB conection
const DBconection = require('./conectionDB');

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));

//routers
app.use('/api/v1', routers);

app.use("/uploads", express.static("uploads"));

app.get('/', function(req, res){
    res.send('<h1>El Back-End esta funcionando</h1>');
})

app.listen(PORT,
    function(){
        console.log(`App running in port ${PORT} - http://localhost:${PORT}`);
    });