const { Schema, model } = require('mongoose');

const User = new Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  country: {
    type: String
  },
  avatarPicture: {
    type: String,
    default: null
  },
  favoriteItineraries: {
    type: Array,
    default: []
  },
  date: {
    type: Date,
    default: Date.now()
  },
  googleId: {
    type: String,
    default: null
  }
});

module.exports = model('users', User);
