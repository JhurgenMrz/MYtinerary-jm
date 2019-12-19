const { Schema, model } = require('mongoose');

const Comment = new Schema({
  activityId: {
    type: Schema.Types.ObjectId,
    required: true
  },
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
    default: new Date()
  }
});

module.exports = model('comments', Comment);
