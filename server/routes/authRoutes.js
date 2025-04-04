// authRoutes.js
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

// @route   POST api/auth/register
// @desc    Đăng ký người dùng mới
// @access  Public
router.post(
  '/register',
  [
    check('name', 'Tên không được để trống').not().isEmpty(),
    check('email', 'Vui lòng nhập email hợp lệ').isEmail(),
    check('password', 'Mật khẩu phải có ít nhất 6 ký tự').isLength({ min: 6 })
  ],
  authController.register
);

// @route   POST api/auth/login
// @desc    Đăng nhập và lấy token
// @access  Public
router.post(
  '/login',
  [
    check('email', 'Vui lòng nhập email hợp lệ').isEmail(),
    check('password', 'Mật khẩu không được để trống').exists()
  ],
  authController.login
);

// @route   POST api/auth/forgot-password
// @desc    Yêu cầu khôi phục mật khẩu
// @access  Public
router.post(
  '/forgot-password',
  [
    check('email', 'Vui lòng nhập email hợp lệ').isEmail()
  ],
  authController.forgotPassword
);

module.exports = router;