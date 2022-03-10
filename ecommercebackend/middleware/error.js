const ErrorResponse = require('../utils/errorResponse');

module.exports = (err, req, res, next) => {
  error.statusCode = err.statusCode || 500;
  error.message = err.message || 'Server Error';

  req.status(err.statusCode).json({
    status: err.statusCode,
    message: err.message, //err.stack
  });
};
