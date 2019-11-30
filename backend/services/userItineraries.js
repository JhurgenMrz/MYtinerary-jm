const User = require("../models/User");
const Itineary = require("../models/Itinerary");
const FavoritesItinearies = require("../models/FavoritesItinearies");
const { config } = require("../config");

class UserItinearies {
  async getFavorites(idUser) {
    try {
      const { favoriteItineraries } = await User.findById(idUser);
      return favoriteItineraries || [];
    } catch (err) {
      return err;
    }
  }

  async postFavorite(idUser, idItinerary) {
    try {
      const UserWanted = await User.findById(idUser);
      const ItinerarySelected = await Itineary.findById(idItinerary)
      const ItineraryUpdated = await Itineary.findOneAndUpdate(
        { _id: idItinerary },
        { rating: ItinerarySelected.rating+1 },
        { new: true }
      );
      console.log("itineary updated ", ItineraryUpdated);
      if (UserWanted.favoriteItineraries.length === 0) {
        UserWanted.favoriteItineraries.push({ idItinerary });
        console.log(UserWanted);
        const UserUpdated = await User.findOneAndUpdate(
          { _id: idUser },
          { favoriteItineraries: UserWanted.favoriteItineraries },
          { new: true }
        );
        console.log("User Updated, Nunca di Like", UserUpdated);
        return {
          UserItinearies: UserUpdated.favoriteItineraries,
          rating: ItineraryUpdated.rating
        };
      }
      const IdItinearyWanted = UserWanted.favoriteItineraries.filter(el => {
        //Return Itinerary liked
        if (el.idItinerary === idItinerary) return el;
      });
    //   console.log(IdItinearyWanted);
      if (IdItinearyWanted.length !== 0) {
        console.log("Ya le di Like");
        return  {
            UserItinearies: IdItinearyWanted.favoriteItineraries,
            rating: ItineraryUpdated.rating
          };
      } else {
        console.log("Recien le di Like");
        UserWanted.favoriteItineraries.push({ idItinerary });
        const UserUpdated = await User.findByIdAndUpdate(
          idUser,
          { favoriteItineraries: UserWanted.favoriteItineraries },
          { new: true }
        );
        return {
            UserItinearies: UserUpdated.favoriteItineraries,
            rating: ItineraryUpdated.rating
          };
      }
    } catch (err) {
      return err;
    }
  }

  async deleteFavItinerary(idUser, idItinerary) {
    try {
      const UserWanted = await User.findById(idUser);
      const ItinerarySelected = await Itineary.findById(idItinerary)
      const ItineraryUpdated = await Itineary.findOneAndUpdate(
        { _id: idItinerary },
        { rating: ItinerarySelected.rating-1 },
        { new: true }
      );
      const itinerariesUpdated = await UserWanted.favoriteItineraries.filter(
        el => {
          if (el.idItinerary !== idItinerary) return el;
        }
      );
      const userUpdated = await User.findByIdAndUpdate(
        idUser,
        { favoriteItineraries: itinerariesUpdated },
        { new: true }
      );
      return {UserItinearies: userUpdated.favoriteItineraries, rating: ItineraryUpdated.rating} || [];
    } catch (err) {
      return err;
    }
  }
}

module.exports = UserItinearies;
