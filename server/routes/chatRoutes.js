// chatRoutes.js
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const chatController = require('../controllers/chatController');
const auth = require('../middleware/auth');

// @route   POST api/chat/message
// @desc    Gửi tin nhắn đến chatbot
// @access  Private
router.post(
  '/message',
  [
    auth,
    [
      check('message', 'Tin nhắn không được để trống').not().isEmpty()
    ]
  ],
  chatController.sendMessage
);

// @route   GET api/chat/history
// @desc    Lấy lịch sử chat
// @access  Private
router.get('/history', auth, chatController.getChatHistory);

// @route   DELETE api/chat/history
// @desc    Xóa lịch sử chat
// @access  Private
router.delete('/history', auth, chatController.clearChatHistory);

module.exports = router;