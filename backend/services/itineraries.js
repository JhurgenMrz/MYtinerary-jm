const Itinerary = require("../models/Itinerary");
const { Schema } = require("mongoose");
const City = require("../models/City");

class ItinerariesServices {
  async getItineraries(id) {
    console.log(id);
    try {
      const itineraries = await Itinerary.find({
        city_id: id
      });
      return itineraries || [];
    } catch (err) {
      return err;
    }
  }
}

module.exports = ItinerariesServices;
