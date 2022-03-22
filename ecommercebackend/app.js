const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');

const errorMiddleware = require('./middleware/error');

// Config
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({ path: 'ecommercebackend/config/config.env' });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports
const product = require('./routes/products');
const user = require('./routes/users');
const order = require('./routes/orders');

app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/api/v1', order);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
