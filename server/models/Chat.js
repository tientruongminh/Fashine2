// Chat.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  isFromBot: {
    type: Boolean,
    default: false
  },
  suggestedItems: [{
    type: Schema.Types.ObjectId,
    ref: 'Clothing'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Chat', ChatSchema);