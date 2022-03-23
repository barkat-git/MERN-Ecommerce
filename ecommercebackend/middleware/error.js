const ErrorResponse = require('../utils/errorResponse');

module.exports = (err, req, res, next) => {
  // let error = { ...err };
  err.statusCode = err.code || 500;
  err.message = err.message || 'Server Error';

  res.status(err.statusCode).json({
    success: true,
    message: err.stack, //err.stack
  });
};
