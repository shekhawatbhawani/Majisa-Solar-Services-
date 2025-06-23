const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user', // 👈 this ensures default is "user"
  },
  timetemp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);
