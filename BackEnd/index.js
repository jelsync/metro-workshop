const express = require('express');
const database = require('./database/conection');
const cors = require('cors');
require('dotenv').config();

const app = express();

//Direcction public
app.use( express.static(' public '));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

//Router
app.use('/api/auth', require('./router/auth'));
app.use('/api/product', require('./router/product-route'));
app.use('/api/user-admin', require('./router/user-route'));
app.use('/api/client', require('./router/client-route'));



//Auth

//CRUD


//lisen request
app.listen(process.env.PORT, ()=>{
    console.log(`Server running to http://localhost:4000`);
});