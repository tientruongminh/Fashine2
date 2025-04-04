// userRoutes.js
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// @route   GET api/users/me
// @desc    Lấy thông tin người dùng hiện tại
// @access  Private
router.get('/me', auth, userController.getCurrentUser);

// @route   PUT api/users/profile
// @desc    Cập nhật thông tin cá nhân
// @access  Private
router.put(
  '/profile',
  [
    auth,
    upload.single('avatar'),
    [
      check('name', 'Tên không được để trống').optional(),
      check('gender', 'Giới tính không hợp lệ').optional().isIn(['male', 'female', 'other'])
    ]
  ],
  userController.updateProfile
);

// @route   GET api/users
// @desc    Lấy danh sách tất cả người dùng (admin only)
// @access  Private/Admin
router.get('/', auth, userController.getAllUsers);

// @route   GET api/users/:id
// @desc    Lấy thông tin người dùng theo ID
// @access  Private/Admin
router.get('/:id', auth, userController.getUserById);

module.exports = router;