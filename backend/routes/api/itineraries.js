const express = require("express");

const ItinerariesServices = require("../../services/itineraries");

function itinerariesApi(app) {
  const router = express.Router();
  const itinerServices = new ItinerariesServices();
  app.use("/api/itineraries/", router);

  router.get("/:cityId", async function(req, res) {
    const { cityId } = req.params;
    const itineraries = await itinerServices.getItineraries(cityId);
    //Funciona!
    res.status(200).json({
      data: itineraries,
      message: "Itineraries Listed"
    });
  });
  router.post("/:cityId", async function(req, res) {
    const { cityId } = req.params;
    const {body: itinerary} = req
    const itineraries = await itinerServices.createItinerary(itinerary, cityId);
    //Funciona!
    res.status(200).json({
      data: itineraries,
      message: "Itineraries Created"
    });
  });
  router.delete("/:cityId", async function(req, res) {
    const { cityId } = req.params;
    const itineraryDeleted = await itinerServices.deleteItinerary(cityId);
    //Funciona!
    res.status(200).json({
      data: itineraryDeleted,
      message: "Itinerary Deleted"
    });
  });
}

module.exports = itinerariesApi;
