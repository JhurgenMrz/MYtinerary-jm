const { Schema, model } = require('mongoose');

const Comment = new Schema({
  userId: {
    type: Schema.Types.ObjectId
  },
  userName: {
    type: String,
    required: true
  },
  avatarPicture: {
    type: String
  },
  commentContent: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const Activity = new Schema({
  itinerary_id: {
    type: Schema.Types.ObjectId,
    ref: 'itineraries',
    required: true
  },
  activity_name: {
    type: String,
    required: true
  },
  img_url: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  comments: [Comment],
  rating: {
    type: Number
  },
  price: {
    type: Number
  }
});

module.exports = model('activities', Activity);
