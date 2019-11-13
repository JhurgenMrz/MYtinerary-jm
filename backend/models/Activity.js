const { Schema, model } = require("mongoose");

const Activity = new Schema({
  itinerary_id: {
    type: Schema.Types.ObjectId,
    ref: "itineraries",
    required: true
  },
  activity_name: {
    type: String,
    required: true
  },
  img_url: {
    type: String,
    required: true
  }
});

module.exports = model("activities", Activity);
