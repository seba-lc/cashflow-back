const {model, Schema} = require('mongoose');

const JourneySchema = new Schema({
  user: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 20
  },
  business: {
    type: Schema.Types.ObjectId,
    ref: 'Business',
    required: true,
    trim: true,
    minlength: 20,
    maxlength: 30
  },
  hours: {
    type: Number,
    required: true,
    trim: true,
    max: 24,
    min: 0
  },
  date: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 10
  },
  dayIncome: {
    type: Number,
    required:true,
    trim: true,
    min: 0,
    max: 5000
  },
  hourRate: {
    type: Number,
    required:true,
    trim: true,
    min: 0,
    max: 5000
  },
  comment: {
    type: String,
    trim: true,
    default: 'No comments',
    maxlength: 200
  },
  paymentType: {
    type: String,
    required: true,
    enum: ['ABN', 'TFN'],
    uppercase: true,
    trim: true,
    maxlength: 5
  }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = model('Journey', JourneySchema);