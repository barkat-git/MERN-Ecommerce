const express = require('express');
const {
  getAllProducts,
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} = require('../controllers/products');
const app = require('../app');

const router = express.Router();

router.route('/').get(getAllProducts).post(createProduct);
router.route('/:id').get(getProduct).delete(deleteProduct).put(updateProduct);

module.exports = router;
