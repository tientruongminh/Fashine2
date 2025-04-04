// clothingRoutes.js
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const clothingController = require('../controllers/clothingController');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// @route   GET api/clothing
// @desc    Lấy tất cả sản phẩm quần áo
// @access  Public
router.get('/', clothingController.getAllClothing);

// @route   GET api/clothing/:id
// @desc    Lấy thông tin sản phẩm theo ID
// @access  Public
router.get('/:id', clothingController.getClothingById);

// @route   POST api/clothing
// @desc    Tạo sản phẩm quần áo mới
// @access  Private/Admin
router.post(
  '/',
  [
    auth,
    upload.single('image'),
    [
      check('name', 'Tên sản phẩm không được để trống').not().isEmpty(),
      check('price', 'Giá phải là số dương').isNumeric().custom(value => value > 0)
    ]
  ],
  clothingController.createClothing
);

// @route   PUT api/clothing/:id
// @desc    Cập nhật thông tin sản phẩm
// @access  Private/Admin
router.put(
  '/:id',
  [
    auth,
    upload.single('image'),
    [
      check('name', 'Tên sản phẩm không được để trống').optional(),
      check('price', 'Giá phải là số dương').optional().isNumeric().custom(value => value > 0)
    ]
  ],
  clothingController.updateClothing
);

// @route   DELETE api/clothing/:id
// @desc    Xóa sản phẩm
// @access  Private/Admin
router.delete('/:id', auth, clothingController.deleteClothing);

module.exports = router;