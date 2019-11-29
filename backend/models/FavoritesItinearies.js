const { Schema, model } = require("mongoose");

const FavoritesItinearies = new Schema({
  id_user: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  id_itinerary: {
    type: Schema.Types.ObjectId,
    ref: "itineraries",
    required: true
  }
});


module.exports = model('favsItinearies', FavoritesItinearies)