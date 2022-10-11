const {model, Schema} = require('mongoose');

const BusinessSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minlength: 3,
    maxlength: 30
  },
  payment: {
    type: String,
    required: true,
    enum: ['perJourney', 'perHour']
  }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = model('Business', BusinessSchema);