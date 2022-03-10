const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: [true, 'Please Enter the product name'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please Enter the product description'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Please Enter the product price'],
    trim: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: [true, 'Please upload the product image'],
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, 'Please Enter the product category'],
  },
  stock: {
    type: Number,
    required: [true, 'Please Enter the product stock'],
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: [true, 'Please Enter the product review name'],
      },
      rating: {
        type: Number,
        required: [true, 'Please Enter the product review rating'],
      },
      review: {
        type: String,
        required: [true, 'Please Enter the product review'],
      },
    },
  ],
});
productSchema.set('timestamps', true);

module.exports = mongoose.model('Product', productSchema);
