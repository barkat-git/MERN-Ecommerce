const ErrorResponse = require('../utils/errorResponse');

module.exports = (err, req, res, next) => {
  let error = { ...err };
  error.statusCode = err.code || 500;
  error.message = err.message || 'Server Error';

  res.status(error.statusCode).json({
    status: error.statusCode,
    message: err.stack, //err.stack
  });
};
