// Clothing.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClothingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  purchases: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    enum: ['shirt', 'pants', 'dress', 'jacket', 'other'],
    default: 'other'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Clothing', ClothingSchema);