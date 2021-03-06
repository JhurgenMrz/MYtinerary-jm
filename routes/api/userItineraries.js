const express = require("express");
const authentication = require("../../utils/middlewares/authentication");
const passport = require("passport");

const UserItineraries = require("../../services/userItineraries");
require("../../utils/auth/strategies/jwt");

function userItineraries(app) {
  const router = express.Router();
  const userItineraries = new UserItineraries();
  app.use("/api/userItineraries", router);

  router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      const user = req.user;
      const idUser = user._id;
      try {
        const userItineariesFav = await userItineraries.getFavorites(idUser);
        res.status(200).json({
          userItineariesFav,
          message: "ItinerariesFavs listed"
        });
      } catch (err) {
        res.status(500).json({ message: "Error Server" });
      }
    }
  );

  router.post(
    "/:idItineary",
    passport.authenticate("jwt", { session: false }),
    async function(req, res) {
      console.log(req)
      const { _id: idUser } = req.user;
      const { idItineary } = req.params;
      //   console.log(idUser,idItineary)
      try {
        const userItinearies = await userItineraries.postFavorite(
          idUser,
          idItineary
        );
        //Funciona!
        console.log(userItinearies);
        res.status(200).json({
          data: userItinearies,
          message: "Liked Success"
        });
      } catch (error) {
        res.status(404).json({
          data: error.message,
          message: "Liked Error"
        });
      }
    }
  );

  router.delete(
    "/:idItineary",
    passport.authenticate("jwt", { session: false }),
    async function(req, res) {
      const { _id: idUser } = req.user;
      const { idItineary } = req.params;
      try {
        const userItinearies = await userItineraries.deleteFavItinerary(
          idUser,
          idItineary
        );
        //Funciona!
        res.status(200).json({
          data: userItinearies,
          message: "DisLiked Success"
        });
      } catch (err) {
        res.status(200).json({
          data: err.message,
          message: "Liked Error"
        });
      }
    }
  );
}

module.exports = userItineraries;
