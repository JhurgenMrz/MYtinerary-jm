const express = require("express");

const ItinerariesServices = require("../../services/itineraries");

function itinerariesApi(app) {
  const router = express.Router();
  const itinerServices = new ItinerariesServices();
  app.use("/api/cities/itineraries/", router);

  router.get("/:cityId", async function(req, res) {
    const { cityId } = req.params;
    const itineraries = await itinerServices.getItineraries(cityId);
    //Funciona!
    res.status(200).json({
      data: itineraries,
      message: "Itineraries Listed"
    });
  });
}

module.exports = itinerariesApi;
