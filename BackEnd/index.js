const express = require('express');
require('dotenv').config();

const app = express();

//Direcction public
app.use( express.static(' public '));

//Router
app.use('/api/auth', require('./routes/auth'));

//Auth

//CRUD


//lisen request
app.listen(process.env.PORT, ()=>{
    console.log(`Active Server`);
});