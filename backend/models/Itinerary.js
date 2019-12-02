const { Schema, model } = require("mongoose");

//Create Schema
const Itinerary = new Schema({
  city_id: {
    type: Schema.Types.ObjectId,
    ref: "cities",
    required: true
  },
  title: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true,
    ref: 'users'
  },
  profilePic: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  hastag: {
    type: Array
  }
});

module.exports = model("itineraries", Itinerary);
