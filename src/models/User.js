const {model, Schema} = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: 3,
    maxlength: 20
  },
  password: {
    type: String,
    required:true,
    trim: true,
    minlength: 8,
    maxlength: 80
  }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = model('User', UserSchema);