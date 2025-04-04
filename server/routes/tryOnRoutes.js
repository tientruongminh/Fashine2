// tryOnRoutes.js
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const tryOnController = require('../controllers/tryOnController');
const auth = require('../middleware/auth');

// @route   POST api/try-on
// @desc    Thử đồ ảo
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('clothingId', 'ID sản phẩm không hợp lệ').isMongoId()
    ]
  ],
  tryOnController.tryOn
);

// @route   GET api/try-on/history
// @desc    Lấy lịch sử thử đồ
// @access  Private
router.get('/history', auth, tryOnController.getTryOnHistory);

// @route   DELETE api/try-on/history/:id
// @desc    Xóa mục trong lịch sử thử đồ
// @access  Private
router.delete('/history/:id', auth, tryOnController.removeTryOnHistoryItem);

module.exports = router;