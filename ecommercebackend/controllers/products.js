const Product = require('../models/Products');
const ErrorResponse = require('../utils/errorResponse');
const catchAsyncError = require('../middleware/catchAsyncError');

//Create product
// exports.createProduct = async (req, res, next) => {
//   try {
//     const createproduct = await Product.create(req.body);
//     res.status(201).json({
//       status: 'success',
//       data: createproduct,
//     });
//   } catch (err) {
//     return next(new ErrorResponse(`Failed to create product`, 400));
//   }
// };

exports.createProduct = catchAsyncError(async (req, res, next) => {
  const createproduct = await Product.create(req.body);
  res.status(201).json({
    status: 'success',
    data: createproduct,
  });
});

//get all products
// exports.getAllProducts = async (req, res, next) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json({
//       status: true,
//       data: products,
//     });
//   } catch (err) {
//     return next(new ErrorResponse(`Failed to get all products`, 400));
//   }
// };

exports.getAllProducts = catchAsyncError(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    status: 'success',
    data: products,
  });
})

//get a product
exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: product,
    });
  } catch (err) {
    return next(new ErrorResponse(`Failed to get product`, 400));
  }
};

//update product
exports.updateProduct = async (req, res) => {
  try {
    const updateproduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: 'success',
      data: updateproduct,
    });
  } catch (err) {
    return next(new ErrorResponse(`Failed to update product`, 400));
  }
};

//delete product
exports.deleteProduct = async (req, res) => {
  try {
    const deleteproduct = await Product.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: deleteproduct,
    });
  } catch (err) {
    return next(new ErrorResponse(`Failed to delete product`, 400));
  }
};
