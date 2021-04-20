const express = require('express');
const database = require('./database/conection');
const cors = require('cors');
require('dotenv').config();

const app = express();

//Direcction public
app.use(cors());
app.use(express.static(' public '));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router
app.use('/api/product', require('./router/product-route'));
app.use('/api/user-admin', require('./router/user-route'));
app.use('/api/client', require('./router/client-route'));
app.use('/api/category', require('./router/category-route'));

//lisen request
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server running to ${port}`);  
});