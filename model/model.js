const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      pincode: {
        type: Number,
        required: true,
      },
      service: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
}, { collection: 'users' });

userSchema.index({ user: 1 });

module.exports = mongoose.model('User', userSchema);