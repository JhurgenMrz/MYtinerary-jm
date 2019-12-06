const { Schema, model } = require("mongoose");

const Comment = new Schema({
  itineraryId: {
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

module.exports = model("comments", Comment);
