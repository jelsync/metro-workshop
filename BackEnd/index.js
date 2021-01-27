const express = require('express');
const database = require('./database/conection');
require('dotenv').config();

const app = express();

//Direcction public
app.use( express.static(' public '));
app.use(express.urlencoded({extended:true}));

//Router
app.use('/api/auth', require('./router/auth'));
app.use('/api/product', require('./router/product-route'));
//app.use('/api/admin', require('./router/admin-route'));



//Auth

//CRUD


//lisen request
app.listen(process.env.PORT, ()=>{
    console.log(`Server running to http://localhost:4000`);
});