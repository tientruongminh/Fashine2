// index.js (routes)
const express = require('express');
const router = express.Router();

// Import các routes
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const clothingRoutes = require('./clothingRoutes');
const tryOnRoutes = require('./tryOnRoutes');
const chatRoutes = require('./chatRoutes');

// Định nghĩa các routes
router.use('/api/auth', authRoutes);
router.use('/api/users', userRoutes);
router.use('/api/clothing', clothingRoutes);
router.use('/api/try-on', tryOnRoutes);
router.use('/api/chat', chatRoutes);

// Export router
module.exports = router;