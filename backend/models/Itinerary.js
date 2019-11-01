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
  profilePic: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  duration: {
    type: String,
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
