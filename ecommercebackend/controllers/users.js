const Users = require('../models/Users');
const ErrorResponse = require('../utils/errorResponse');
const catchAsyncError = require('../middleware/catchAsyncError');

//register a user
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await Users.create({
    name,
    email,
    password,
    avatar: {
      public_id: 'sample_img_id',
      url: 'sampleimgurl',
    },
  });
  const token = user.getJWTToken();
  res.status(201).json({
    success: true,
    token,
  });
});
