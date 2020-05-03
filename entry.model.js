const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Entry = new Schema({
  description: String,
  time: String,
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'] // 'location.type' must be 'Point'
    },
    coordinates: {
      type: [Number]
    }
  }
});

module.exports = mongoose.model('Entry', Entry);