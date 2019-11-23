const Itinerary = require('../models/Itinerary');
const { Schema } = require('mongoose');
const City = require('../models/City');

class ItinerariesService {
  async getItineraries(id) {
    try {
      const itineraries = await Itinerary.find({
        city_id: id
      });
      return itineraries || [];
    } catch (err) {
      return err;
    }
  }
  async createItinerary(itinerary, cityId) {
    console.log(itinerary, cityId);
    const newItinerary = {
      city_id: cityId,
      title: itinerary.title,
      profilePic: itinerary.profilePic,
      rating: itinerary.rating,
      duration: itinerary.duration,
      price: itinerary.price,
      hastag: itinerary.hastag
    };
    try {
      const itineraryCreated = await Itinerary.create(newItinerary);
      return itineraryCreated || [];
    } catch (err) {
      return err;
    }
  }
  async deleteItinerary(cityId) {
    try {
      const itineraryDeleted = await Itinerary.findByIdAndDelete(cityId);
      return itineraryDeleted || [];
    } catch (err) {
      return err;
    }
  }
}

module.exports = ItinerariesService;
