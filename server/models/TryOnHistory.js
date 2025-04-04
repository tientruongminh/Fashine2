// TryOnHistory.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TryOnHistorySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  clothing: {
    type: Schema.Types.ObjectId,
    ref: 'Clothing',
    required: true
  },
  resultImage: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('TryOnHistory', TryOnHistorySchema);