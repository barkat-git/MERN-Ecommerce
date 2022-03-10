const express = require('express');
const app = express();
const errorMiddleware = require('../ecommercebackend/middleware/error');

app.use(express.json());

//Route imports
const product = require('./routes/products');

app.use('/api/v1/products', product);

//middleware for error handling
app.use(errorMiddleware);

module.exports = app;
